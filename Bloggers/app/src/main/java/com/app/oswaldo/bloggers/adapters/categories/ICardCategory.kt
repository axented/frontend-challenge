package com.app.oswaldo.bloggers.adapters.categories

import com.app.oswaldo.bloggers.data.model.Category

interface ICardCategory {
    fun onCategoryTouch(item: Category, position: Int)
}