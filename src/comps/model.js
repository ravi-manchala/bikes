import React from 'react';
import { motion } from 'framer-motion';

const Model = ({selectedImg, setSelectedImg}) => {
    const handleClick = (e) => {
        setSelectedImg(null);
    }
    return (
        <motion.div className ='backdrop' onClick={handleClick}
           initial = {{ opacity: 0}}
           animate = {{ opacity: 1}} 
        >
            <motion.img src={selectedImg} alt="enlarged pic"
              initial = {{ x: '-10vh'}}
              animate = {{ x: 0 }} 
            />
        </motion.div>
    )
}

export default Model; 