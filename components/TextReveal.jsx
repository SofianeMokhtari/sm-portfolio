
import { motion } from "framer-motion"

const TextReveal = ({textValue}) => {

    const sentence = {
        hidden: {opacity: 1},
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2,
                staggerChildren: 0.08
            },
        },
    }

    const letters = {
        hidden: { opacity: 0, y: 50},
        visible: {
            opacity: 1,
            y:0
        }
    }

    return (    
        <motion.div className="load-screen-message" style={{ padding: "25px"}} variants={sentence} initial="hidden" animate="visible">
            {textValue[0].split("").map((char, index) => {
                return (
                    <motion.span style={{fontSize:"50px"}} key={char + "-" + index} variants={letters}>
                        {char}
                    </motion.span>
                )
            })}
            <br />
            {textValue[1].split("").map((char, index) => {
                return (
                    <motion.label style={{fontSize:"25px"}} key={char + "-" + index} variants={letters}>
                        {char}
                    </motion.label>
                )
            })}
        </motion.div>
    )
}

export default TextReveal