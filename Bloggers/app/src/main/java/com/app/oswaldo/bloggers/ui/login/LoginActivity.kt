package com.app.oswaldo.bloggers.ui.login

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import com.app.oswaldo.bloggers.databinding.ActivityLoginBinding
import com.app.oswaldo.bloggers.ui.main.MainContentActivity
import com.app.oswaldo.bloggers.utils.makeStatusBarTransparent

class LoginActivity : AppCompatActivity() {

    private lateinit var binding: ActivityLoginBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        makeStatusBarTransparent()

        binding = ActivityLoginBinding.inflate(layoutInflater)
        setContentView(binding.root)
    }

    fun attemptLogin(view: View) {
        val intent = Intent(this, MainContentActivity::class.java)
       startActivity(intent)
    }
}