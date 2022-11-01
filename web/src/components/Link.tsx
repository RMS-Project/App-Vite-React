interface LinkProps {
    text: string
    redirect: string
}

export default function Link(props :LinkProps) {
    return (
        <a href={props.redirect} rel="noreferrer">
            {props.text}
        </a>
    )
}