package com.app.oswaldo.bloggers.ui.detail

import android.annotation.SuppressLint
import android.os.Bundle
import android.view.View
import androidx.appcompat.app.AppCompatActivity
import com.app.oswaldo.bloggers.R
import com.app.oswaldo.bloggers.data.api.response.Blogger
import com.app.oswaldo.bloggers.databinding.ActivityDetailBinding
import com.app.oswaldo.bloggers.utils.makeStatusBarTransparent
import com.bumptech.glide.Glide

@SuppressLint("SetTextI18n")
class DetailActivity : AppCompatActivity() {

    private lateinit var binding: ActivityDetailBinding
    private lateinit var blogger : Blogger

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        makeStatusBarTransparent()

        binding = ActivityDetailBinding.inflate(layoutInflater)
        setContentView(binding.root)
        prepareData()


        Glide.with(this).load(blogger.picture).into(binding.imgBlogger)
        binding.titleName.text = blogger.name
        binding.titleDescription.text = blogger.description
        binding.txtEmail.text = "( ${blogger.email} )"
        binding.txtWebSite.text = blogger.website
    }

    private fun prepareData()
    {
        blogger = Blogger(
            intent.getIntExtra("id", 0),
            intent.getStringExtra("name"),
            intent.getStringExtra("description"),
            intent.getStringExtra("picture"),
            intent.getStringExtra("website"),
            intent.getStringExtra("email")
        )
    }

    fun backAction(view: View) {
        finish()
    }
}