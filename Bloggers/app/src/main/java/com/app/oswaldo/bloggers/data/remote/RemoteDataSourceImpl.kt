/**
 * Created by Oswaldo GH on 14/03/21.
 */

package com.app.oswaldo.bloggers.data.remote

import com.app.oswaldo.bloggers.data.api.RetrofitClient
import com.app.oswaldo.bloggers.data.api.response.BloggerResponse
import com.app.oswaldo.bloggers.domain.DataSource
import com.app.oswaldo.bloggers.utils.Resource

class RemoteDataSourceImpl : DataSource {
    override suspend fun getList(categoryId: Int): Resource<BloggerResponse> {
        return Resource.Success(RetrofitClient.webservice.getList(categoryId))
    }
}