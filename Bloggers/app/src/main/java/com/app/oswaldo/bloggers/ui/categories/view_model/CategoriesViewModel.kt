/**
 * Created by Oswaldo GH on 14/03/21.
 */

package com.app.oswaldo.bloggers.ui.categories.view_model

import androidx.lifecycle.*
import com.app.oswaldo.bloggers.domain.Repo
import com.app.oswaldo.bloggers.utils.Resource
import kotlinx.coroutines.Dispatchers

class CategoriesViewModel(private val repo: Repo) : ViewModel(), LifecycleObserver {

    private val categoryChanged: MutableLiveData<Int> = MutableLiveData()
    private var categoryId: Int = 0


    fun attemptGetList(categoryId: Int) {
        this.categoryId = categoryId
        this.categoryChanged.value = categoryId
    }

    val categoryList =  categoryChanged.switchMap {
        liveData(Dispatchers.IO) {
            emit(Resource.Loading())
            try {
                emit(repo.getList(categoryId))
            } catch (e: Exception) {
                emit(Resource.Failure(e.message ?: "Unknown Error", e))
            }
        }
    }

}