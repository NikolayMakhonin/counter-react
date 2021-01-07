import * as React from 'react'

declare global {
    interface _IntrinsicElements {
        [elemName: string]: any
    }
    namespace JSX {
        interface IntrinsicElements extends _IntrinsicElements, JSX.IntrinsicElements {

        }
    }
}

