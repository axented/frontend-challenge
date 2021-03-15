package com.app.oswaldo.bloggers.data.model


import com.google.gson.annotations.SerializedName

data class Category(
    @SerializedName("id") val id: Int,
    @SerializedName("description") val description: String,
    @SerializedName("total_items") val totalItems: Int,
    @SerializedName("image") val imageUrl: Int,
)