/**
 * Created by Oswaldo GH on 14/03/21.
 */

package com.app.oswaldo.bloggers.ui.categories.view_model

import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import com.app.oswaldo.bloggers.domain.Repo

class VMCategories(private val repo: Repo) : ViewModelProvider.Factory {
    override fun <T : ViewModel?> create(modelClass: Class<T>): T {
        return modelClass.getConstructor(Repo::class.java).newInstance(repo)
    }
}