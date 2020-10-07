import React from 'react';

type Props = {
    title: string,
    children: React.ReactNode
}

function MyProps(props: Props){
    return (
        <p>{ props.title }: { props.children }</p>
    )
}

export default MyProps;