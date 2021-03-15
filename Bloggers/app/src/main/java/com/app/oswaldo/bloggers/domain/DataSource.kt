/**
 * Created by Oswaldo GH on 14/03/21.
 */

package com.app.oswaldo.bloggers.domain

import com.app.oswaldo.bloggers.data.api.response.BloggerResponse
import com.app.oswaldo.bloggers.utils.Resource

interface DataSource {
    suspend fun getList(categoryId: Int) : Resource<BloggerResponse>
}