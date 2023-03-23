const Section = ({title="Please leave feedback", children}) => {
    return(
        <section title="feedback">
            <h2>{title}</h2>
            {children}
        </section>
    )
}

export default Section;