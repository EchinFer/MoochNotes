"use client"
import Gantt from "frappe-gantt";
import "frappe-gantt/dist/frappe-gantt.css";
import { useEffect, useRef } from "react";
const GanttPage = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current === null) return;
        var tasks: Gantt.Task[] = [
            {
                id: '1',
                name: 'Pantallas de SEBAOT - NUevo diseño',
                start: '2016-12-28',
                end: '2016-12-31',
                progress: 20,
                dependencies: "",
                custom_class: 'bar-milestone' // optional
            },
        ];

        const id = containerRef.current.id;
        var gantt = new Gantt(`#${id}`, tasks, {
            language: 'es',
        });
    }, [containerRef.current]);

    return (
        <div ref={containerRef} id="gantt"></div>
    );
}

export default GanttPage;