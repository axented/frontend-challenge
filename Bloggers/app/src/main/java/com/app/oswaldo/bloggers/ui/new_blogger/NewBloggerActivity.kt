package com.app.oswaldo.bloggers.ui.new_blogger

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Toast
import com.app.oswaldo.bloggers.R
import com.app.oswaldo.bloggers.utils.makeStatusBarTransparent

class NewBloggerActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_new_blogger)
        makeStatusBarTransparent()
    }

    fun backAction(view: View) {
        finish()
    }

    fun addBlogger(view: View) {
        Toast.makeText(this, "Blogger added succesfully", Toast.LENGTH_SHORT).show()
        finish()
    }
}