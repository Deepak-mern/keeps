import React from 'react'

const Footer = () => {
    const year= new Date().getFullYear();

    return (
        <div className="footer1">
            <p>
                Copyright &copy;2020- {year} DeepakKeep . All Rights are Reserved</p>
        </div>
    )
}

export default Footer
