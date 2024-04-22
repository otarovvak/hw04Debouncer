export const PostCard = ({id, title, remove}) => {
    return (<>
        <p>{title}</p>
        <button onClick={() => remove(id)}>Удалить</button>
    </>)
}