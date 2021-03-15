package com.app.oswaldo.bloggers.ui.onboard

import android.annotation.SuppressLint
import android.content.Intent
import android.os.Bundle
import android.view.View
import androidx.appcompat.app.AppCompatActivity
import androidx.viewpager.widget.ViewPager
import com.app.oswaldo.bloggers.R
import com.app.oswaldo.bloggers.adapters.onboard.ViewPagerAdapter
import com.app.oswaldo.bloggers.databinding.ActivityMainBinding
import com.app.oswaldo.bloggers.ui.login.LoginActivity
import com.app.oswaldo.bloggers.utils.makeStatusBarTransparent
import com.app.oswaldo.bloggers.ui.main.MainContentActivity
import com.app.oswaldo.bloggers.utils.Constants


@SuppressLint("SetTextI18n")
class OnBoardActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding
    private var currentPosition = 0

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        makeStatusBarTransparent()
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        initViews()
        setStatePageAdapter()
        changeSlideContent(Constants.SLIDE_ONE)
    }

    private fun initViews() {
        binding.pager.addOnPageChangeListener(object : ViewPager.SimpleOnPageChangeListener() {
            override fun onPageSelected(position: Int) {
                currentPosition = position
                when (position) {
                    0 -> changeSlideContent(Constants.SLIDE_ONE)
                    1 -> changeSlideContent(Constants.SLIDE_TWO)
                    2 -> changeSlideContent(Constants.SLIDE_THREE)
                }
            }
        })
    }

    private fun changeSlideContent(screen: Int) {
        when (screen) {
            Constants.SLIDE_ONE -> {
                binding.txtSlideTitle.text = getString(R.string.title_slide_one)
                binding.btnAction.text = getString(R.string.txt_next)
            }
            Constants.SLIDE_TWO -> {
                binding.txtSlideTitle.text = getString(R.string.title_slide_two)
                binding.btnAction.text = getString(R.string.txt_next)
            }
            Constants.SLIDE_THREE -> {
                binding.txtSlideTitle.text = getString(R.string.title_slide_three)
                binding.btnAction.text = getString(R.string.txt_done)
            }
        }
    }

    private fun setStatePageAdapter() {
        val viewPagerAdapter = ViewPagerAdapter(supportFragmentManager)

        viewPagerAdapter.addFragment(SlideOneFragment())
        viewPagerAdapter.addFragment(SlideTwoFragment())
        viewPagerAdapter.addFragment(SlideThreeFragment())

        binding.pager.adapter = viewPagerAdapter
        binding.wormDotsIndicator.setViewPager(binding.pager)
    }

    fun nextAction(view: View) {
        when (currentPosition) {
            0 -> binding.pager.currentItem = 1
            1 -> binding.pager.currentItem = 2
            2 -> terminar()
        }
    }

    private fun terminar() {
        val intent = Intent(this, LoginActivity::class.java)
        startActivity(intent)
        finish()
    }

}