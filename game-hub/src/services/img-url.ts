import ImagePlaceholder from "../assets/Image Placeholder/no-image-placeholder.webp";

const getCropIMGURL = (url: string) => {
    if(!url) return ImagePlaceholder;

    const target = "media/"
    const index = url.indexOf(target) + target.length;

    return url.slice(0, index) + "crop/600/400/" + url.slice(index);
}

export default getCropIMGURL;