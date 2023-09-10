function showCategory(categoryId) {
    // Hide all image previews
    const allImagePreviews = document.querySelectorAll('.image-preview');
    allImagePreviews.forEach((preview) => {
        preview.style.display = 'none';
    });

    // Show the image previews for the selected category
    const categoryImages = document.getElementById(categoryId + '-images');
    if (categoryImages) {
        categoryImages.style.display = 'block';
    }
}