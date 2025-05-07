import { useState } from 'react';

interface ImageGalleryProps {
    Image: string[];
};

function ImageGallery({ Image }: ImageGalleryProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleImageClick = (src: string) => {
        setSelectedImage(src);
    };

    const closeOverlay = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <div className="flex flex-col items-center my-6">
                {Image.map((imgSrc, index) => (
                    <img
                        key={index}
                        src={imgSrc}
                        alt={`image ${index + 1}`}
                        title="Cliquez sur l'image pour aggrandir"
                        className="w-3/5 lg:w-[30vw] cursor-pointer shadow-lg hover:scale-105 transition-transform duration-300"
                        onClick={() => handleImageClick(imgSrc)}
                    />
                ))}
            </div>

            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-start justify-center z-50"
                    onClick={closeOverlay}
                >
                    <img
                        src={selectedImage}
                        alt="Agrandie"
                        className="max-w-[90vw] lg:max-h-[90vh] shadow-xl mt-[50vw] lg:mt-[10vw]"
                    />
                </div>
            )}
        </>
    );
}

export default ImageGallery;
