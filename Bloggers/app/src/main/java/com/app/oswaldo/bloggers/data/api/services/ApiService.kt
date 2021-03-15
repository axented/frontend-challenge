/**
 * Created by Oswaldo GH on 14/03/21.
 */

package com.app.oswaldo.bloggers.data.api.services

import com.app.oswaldo.bloggers.data.api.response.BloggerResponse
import retrofit2.http.GET
import retrofit2.http.Path

interface ApiService {
    @GET("bloggers/{categoryId}")
    suspend fun getList( @Path("categoryId") categoryId: Int ): BloggerResponse
}
