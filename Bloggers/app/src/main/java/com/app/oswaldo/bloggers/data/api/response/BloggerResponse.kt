package com.app.oswaldo.bloggers.data.api.response


import com.google.gson.annotations.SerializedName

data class BloggerResponse(
    @SerializedName("data") val list: List<Blogger>,
    @SerializedName("message") val message: String,
    @SerializedName("success")  val success: Boolean
)

data class Blogger(
    @SerializedName("id") var id: Int,
    @SerializedName("name") var name: String?,
    @SerializedName("description") var description: String?,
    @SerializedName("picture") var picture: String?,
    @SerializedName("website") var website: String?,
    @SerializedName("email") val email: String?,
)