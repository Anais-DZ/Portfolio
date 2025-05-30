import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageGalleryProps {
    Image: string[];
}

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
                        className="w-3/5 lg:w-[30vw] cursor-pointer shadow-lg hover:scale-115 transition-transform duration-500"
                        onClick={() => handleImageClick(imgSrc)}
                    />
                ))}
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 bg-black/80 flex items-start justify-center z-50"
                        onClick={closeOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.img
                            src={selectedImage}
                            alt="Agrandie"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            className="max-w-[90vw] lg:max-h-[90vh] shadow-xl mt-[30vw] lg:mt-[10vw]"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default ImageGallery;
