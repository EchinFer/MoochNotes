import React from 'react'
import Script from 'next/script'
interface GanttLayoutPageProps {
    children: React.ReactNode
}
const GanttLayoutPage = ({ children }: GanttLayoutPageProps) => {
    return (
        <>
            <Script src="_next/static/js/frappe-gantt.min.js" />
            {children}
        </>

    )
}

export default GanttLayoutPage