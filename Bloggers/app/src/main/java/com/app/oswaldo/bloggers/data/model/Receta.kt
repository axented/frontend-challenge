package com.app.oswaldo.bloggers.data.model


import com.google.gson.annotations.SerializedName

data class Receta(
    @SerializedName("id") val id: Int,
    @SerializedName("name") val name: String,
    @SerializedName("description") val description: String,
    @SerializedName("likes") val likes: Int,
    @SerializedName("shares") val shares: Int,
    @SerializedName("image") val image: String
)