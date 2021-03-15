package com.app.oswaldo.bloggers.utils

import com.app.oswaldo.bloggers.R
import com.app.oswaldo.bloggers.data.model.Category

class Constants {
    companion object {
        const val BASE_URL = "http://ff51aa042412.ngrok.io/api/"
        const val SLIDE_ONE = 1
        const val SLIDE_TWO = 2
        const val SLIDE_THREE = 3

        var categories = listOf("Music", "Fashion", "Car", "Real state", "Beauty", "Travel", "Movie", "Photography")

        fun dataModelCategory(): ArrayList<Category> {
            val categoryList = ArrayList<Category>()
            categoryList.add(Category(1, categories[0], 152, R.drawable.music))
            categoryList.add(Category(2,categories[1], 36, R.drawable.fashion))
            categoryList.add(Category(3,categories[2], 17, R.drawable.car))
            categoryList.add(Category(4,categories[3], 17, R.drawable.real_state))
            categoryList.add(Category(5,categories[4], 17, R.drawable.beauty))
            categoryList.add(Category(6,categories[5], 17, R.drawable.travel))
            categoryList.add(Category(7,categories[6], 17, R.drawable.movies))
            categoryList.add(Category(8,categories[7], 17, R.drawable.potography))
            return categoryList
        }
    }
}