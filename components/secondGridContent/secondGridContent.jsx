import { Grid } from "@mui/material";
import retro from '../../assets/images/image-retro-pcs.jpg'
import laptops from '../../assets/images/image-top-laptops.jpg';
import gaming from '../../assets/images/image-gaming-growth.jpg'


import styles from './secondGridContent.module.css'

export default function SecondGridContent(){
    return(
        <div>
            <Grid container spacing={3}>
                <Grid item md={4} xs={12} className={styles.contentGrid}>
                    <img src={retro} alt="retro" />
                    
                        <div className={styles.card}>
                            <h2>01</h2>
                            <h3>Reviving Retro PCs </h3>
                            <p>What happens when old PCs are given modern upgrades?</p>
                        </div>
                </Grid>
                <Grid item md={4} xs={12} className={styles.contentGrid}>
                    <img src={laptops} alt="retro" />
                        <div className={styles.card}>
                            <h2>02</h2>
                            <h3>Top 10 Laptops of 2022</h3>
                            <p>Our best picks for various needs and budgets.</p>
                        </div>
                </Grid>
                <Grid item md={4} xs={12} className={styles.contentGrid}>
                    <img src={gaming} alt="retro" />
                        <div className={styles.card}>
                            <h2>03</h2>
                            <h3>The Growth of Gaming</h3>
                            <p>How the pandemic has sparked fresh opportunities.</p>
                        </div>
                </Grid>
            </Grid>
        </div>
    )
}