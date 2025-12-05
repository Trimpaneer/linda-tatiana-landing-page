import * as React from "react"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    containerClassName?: string
}

export function Section({ className = "", containerClassName = "", children, ...props }: SectionProps) {
    return (
        <section className={`py-16 md:py-24 ${className}`} {...props}>
            <div className={`container mx-auto px-4 md:px-6 max-w-6xl ${containerClassName}`}>
                {children}
            </div>
        </section>
    )
}
