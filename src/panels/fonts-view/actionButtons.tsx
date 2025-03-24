import s from "./actionButtons.module.scss";
import { Icon } from "../../components/ui/icon";
import { ElementsIcon } from "../../assets/ElementsIcon";
import { InspectIcon } from "../../assets/InspectIcon";
import { FilterIcon } from "../../assets/FilterIcon";
import { SelectedFontsIcon } from "../../assets/SelectedFontsIcon";
import { motion } from "framer-motion";

const parentVariant = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};
const iconVariant = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export function ActionButtons() {
    return (
        <div className={`${s.container}`}>
            <motion.div
                variants={parentVariant}
                initial="hidden"
                animate="show"
                className={`${s.wrapper}`}
            >
                <motion.div variants={iconVariant} className={`${s.icon}`}>
                    <Icon>
                        <ElementsIcon />
                    </Icon>
                </motion.div>
                <motion.div variants={iconVariant} className={`${s.icon}`}>
                    <Icon>
                        <InspectIcon />
                    </Icon>
                </motion.div>

                <motion.div variants={iconVariant} className={`${s.icon}`}>
                    <Icon>
                        <FilterIcon />
                    </Icon>
                </motion.div>

                <motion.div variants={iconVariant} className={`${s.icon}`}>
                    <Icon>
                        <SelectedFontsIcon />
                    </Icon>
                </motion.div>
            </motion.div>
        </div>
    );
}
