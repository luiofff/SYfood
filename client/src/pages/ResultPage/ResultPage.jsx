import styles from "./ResultPage.module.css"

export default function ResultPage() {
    return (
        <>
            <header className={styles.header}>
                <button className={styles.nav_button}>
                    <span>←</span>
                    <span className={styles.button_title}>Previous</span>
                </button>

                <h1>Title</h1>

                <button className={styles.nav_button}>
                    <span className={styles.button_title}>Next</span>
                    <span>→</span>
                </button>
            </header>
            <section className={styles.content}>
                <div className={styles.content_block}>
                    <h1>Ingredients</h1>
                    <p>3 1/2 c Chicken broth; homemade|1 lb Fresh spinach; wash/trim/chop|1 Egg|1 c Grated parmesan cheese; --or--|1 c Romano cheese; freshly grated|Salt and pepper; to taste"</p>
                </div>
                <div className={styles.content_block}>
                    <h1>Instructions</h1>
                    <p>Bring 1 cup of the broth to a boil. Add spinach and cook until softened but still bright green. Remove spinach with a slotted spoon and set aside. Add remaining broth to pot. Bring to a boil. Meanwhile, beat egg lightly with a fork. Beat in 1/4 cup of cheese. When broth boils pour in egg mixture, stirring constantly for a few seconds until it cooks into "rags." Add reserved spinach, salt and pepper. Serve immediately, passing remaining cheese. NOTES: Someone asked for this recipe a while back. I believe this soup, known as "Stracciatella" is synonymous with Italian Wedding Soup, however, I seem to remember from I-don't-know-where that Italian Wedding Soup is the same as this but with the addition of tiny meatballs.</p>
                </div>
            </section>
        </>
    )
}