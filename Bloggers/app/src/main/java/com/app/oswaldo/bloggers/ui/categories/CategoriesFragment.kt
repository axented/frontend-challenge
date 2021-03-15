package com.app.oswaldo.bloggers.ui.categories

import android.annotation.SuppressLint
import android.content.Intent
import android.os.Bundle
import android.view.LayoutInflater
import android.view.MotionEvent
import android.view.View
import android.view.View.OnTouchListener
import android.view.ViewGroup
import android.widget.Toast
import androidx.fragment.app.Fragment
import androidx.fragment.app.viewModels
import androidx.recyclerview.widget.LinearLayoutManager
import com.app.oswaldo.bloggers.adapters.categories.ICardCategory
import com.app.oswaldo.bloggers.adapters.categories.SliderAdapter
import com.app.oswaldo.bloggers.adapters.receta.BloggersAdapter
import com.app.oswaldo.bloggers.adapters.receta.ICardReceta
import com.app.oswaldo.bloggers.data.api.response.Blogger
import com.app.oswaldo.bloggers.data.model.Category
import com.app.oswaldo.bloggers.data.remote.RemoteDataSourceImpl
import com.app.oswaldo.bloggers.databinding.FragmentCategoriesBinding
import com.app.oswaldo.bloggers.domain.RepoImpl
import com.app.oswaldo.bloggers.ui.categories.view_model.CategoriesViewModel
import com.app.oswaldo.bloggers.ui.categories.view_model.VMCategories
import com.app.oswaldo.bloggers.ui.detail.DetailActivity
import com.app.oswaldo.bloggers.ui.new_blogger.NewBloggerActivity
import com.app.oswaldo.bloggers.utils.Constants
import com.app.oswaldo.bloggers.utils.Resource
import com.ramotion.cardslider.CardSliderLayoutManager
import com.ramotion.cardslider.CardSnapHelper


@SuppressLint("SetTextI18n")
class CategoriesFragment : Fragment(), ICardCategory, ICardReceta {

    private val viewModel by viewModels<CategoriesViewModel> { VMCategories( RepoImpl( RemoteDataSourceImpl()  ) ) }
    private var _binding: FragmentCategoriesBinding? = null
    private val binding get() = _binding!!

    private lateinit var layoutManger: CardSliderLayoutManager
    private lateinit var sliderAdapter: SliderAdapter
    private var currentPosition = 0

    private val mRecetasAdapter: BloggersAdapter = BloggersAdapter()

    override fun onCreateView( inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View {

        _binding = FragmentCategoriesBinding.inflate(inflater, container, false)
        val view = binding.root

        sliderAdapter = SliderAdapter()
        sliderAdapter.recyclerAdapter(Constants.dataModelCategory(), requireContext(), this)

        initRecyclerView()

        setupObserver()
        onActiveCardChange(0)

        binding.fab.setOnClickListener {
            val intent = Intent(requireActivity(), NewBloggerActivity::class.java)
            startActivity(intent)
        }

        return view
    }

    private fun setupObserver() {
        viewModel.categoryList.observe(viewLifecycleOwner, { result ->
            when (result) {
                is Resource.Loading -> {
                    binding.emptyData.visibility = View.GONE
                    binding.rvBloggers.visibility = View.GONE
                    binding.progressLoading.visibility = View.VISIBLE
                }
                is Resource.Success -> {
                    binding.progressLoading.visibility = View.GONE
                    mRecetasAdapter.recyclerAdapter(result.data.list, requireContext(), this)
                    binding.rvBloggers.adapter = mRecetasAdapter
                    binding.txtCategory.text = Constants.categories[currentPosition]

                    if (result.data.list.isNotEmpty()) {
                        binding.rvBloggers.visibility = View.VISIBLE
                        binding.emptyData.visibility = View.GONE

                        if (result.data.list.size == 1) {
                            binding.tsTemperature.text = "${result.data.list.size} blogger"
                        } else {
                            binding.tsTemperature.text = "${result.data.list.size} bloggers"
                        }

                    } else {
                        binding.rvBloggers.visibility = View.GONE
                        binding.emptyData.visibility = View.VISIBLE
                        binding.tsTemperature.text = "0 bloggers"
                    }
                }
                is Resource.Failure -> {
                    binding.progressLoading.visibility = View.GONE
                    Toast.makeText(
                        requireActivity(),
                        "ocurrio un error inesperado, intente de nuevo",
                        Toast.LENGTH_LONG
                    ).show()
                }
            }
        })
    }

    private fun initrvBloggers() {
        binding.rvBloggers.setHasFixedSize(true)
        binding.rvBloggers.layoutManager = LinearLayoutManager(requireActivity())
    }

    @SuppressLint("ClickableViewAccessibility")
    private fun initRecyclerView() {
        binding.recyclerCategories.adapter = sliderAdapter
        binding.recyclerCategories.setHasFixedSize(true)
        binding.recyclerCategories.setOnTouchListener { v, event ->
            when (event?.action) {
                MotionEvent.ACTION_UP -> onActiveCardChange()
            }
            v?.onTouchEvent(event) ?: true
        }

        layoutManger = binding.recyclerCategories.layoutManager as CardSliderLayoutManager
        CardSnapHelper().attachToRecyclerView(binding.recyclerCategories)
    }

    private fun onActiveCardChange() {
        val pos = layoutManger.activeCardPosition
        onActiveCardChange(pos)
    }

    private fun onActiveCardChange(pos: Int) {
        currentPosition = pos

        initrvBloggers()
        viewModel.attemptGetList(pos)
    }

    override fun onCategoryTouch(item: Category, position: Int) {
        binding.recyclerCategories.smoothScrollToPosition(position)
        onActiveCardChange(position)
    }

    override fun onDestroy() {
        super.onDestroy()
        _binding = null
    }

    override fun onItemTouch(item: Blogger) {
        val intent = Intent(requireActivity(), DetailActivity::class.java)
        intent.putExtra("id", item.id)
        intent.putExtra("name", item.name)
        intent.putExtra("description", item.description)
        intent.putExtra("picture", item.picture)
        intent.putExtra("website", item.website)
        intent.putExtra("email", item.email)
        startActivity(intent)
    }

}