package com.app.oswaldo.bloggers.adapters.categories

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import androidx.recyclerview.widget.RecyclerView
import com.app.oswaldo.bloggers.R
import com.app.oswaldo.bloggers.data.model.Category
import com.bumptech.glide.Glide

class SliderAdapter : RecyclerView.Adapter<SliderAdapter.ViewHolder>() {

    private lateinit var activos:  ArrayList<Category>
    lateinit var context: Context
    lateinit var iCardCategory: ICardCategory

    fun recyclerAdapter(itemes:  ArrayList<Category>, context: Context, iCardCategory: ICardCategory) {
        this.activos = itemes
        this.context = context
        this.iCardCategory = iCardCategory
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val item = activos[position]
        holder.bind(item, context)
        holder.itemView.setOnClickListener {
            iCardCategory.onCategoryTouch(item, position)
        }
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val layoutInflater = LayoutInflater.from(parent.context)
        return ViewHolder(layoutInflater.inflate(R.layout.layout_slider_card, parent, false))
    }

    override fun getItemCount(): Int {
        return activos.size
    }

    class ViewHolder(view: View) : RecyclerView.ViewHolder(view) {
        private val imagen = view.findViewById(R.id.image) as ImageView

        fun bind(item: Category, context: Context) {

            Glide.with(context).load(item.imageUrl).into(imagen)
        }
    }
}
