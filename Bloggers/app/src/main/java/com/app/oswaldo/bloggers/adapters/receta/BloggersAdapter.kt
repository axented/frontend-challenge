package com.app.oswaldo.bloggers.adapters.receta

import android.annotation.SuppressLint
import android.content.Context
import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.app.oswaldo.bloggers.data.api.response.Blogger
import com.app.oswaldo.bloggers.databinding.ItemBloggerListBinding
import com.bumptech.glide.Glide

@SuppressLint("SetTextI18n")
class BloggersAdapter : RecyclerView.Adapter<BloggersAdapter.ViewHolder>() {

    private var items: List<Blogger> = ArrayList()
    private lateinit var context: Context
    private lateinit var iCardReceta: ICardReceta

    fun recyclerAdapter(items: List<Blogger>, context: Context, iCardReceta: ICardReceta) {
        this.items = items
        this.context = context
        this.iCardReceta = iCardReceta
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val item = items[position]
        holder.bind(item, context, iCardReceta)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val binding = ItemBloggerListBinding.inflate(LayoutInflater.from(context), parent, false)
        return ViewHolder(binding)

    }

    override fun getItemCount(): Int {
        return items.size
    }

    class ViewHolder(private val itemBinding: ItemBloggerListBinding) : RecyclerView.ViewHolder(itemBinding.root) {
        fun bind(item: Blogger, context: Context, iCardReceta: ICardReceta) {
            Glide.with(context).load(item.picture).into(itemBinding.imgReceta);
            itemBinding.txtTitle.text = item.name
            itemBinding.txtDescription.text = item.description
            itemBinding.card.setOnClickListener {
                iCardReceta.onItemTouch(item)
            }
        }

    }
}