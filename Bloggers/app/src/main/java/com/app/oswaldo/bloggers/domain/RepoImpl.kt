/**
 * Created by Oswaldo GH on 14/03/21.
 */

package com.app.oswaldo.bloggers.domain

import com.app.oswaldo.bloggers.data.api.response.BloggerResponse
import com.app.oswaldo.bloggers.data.remote.RemoteDataSourceImpl
import com.app.oswaldo.bloggers.utils.Resource

class RepoImpl(private val dataSource: RemoteDataSourceImpl) : Repo {
    override suspend fun getList(categoryId: Int): Resource<BloggerResponse> {
        return dataSource.getList(categoryId)
    }

}