import { RotatingLines } from 'react-loader-spinner'

/**
 * Loader component represents the Loader type rotating lines.
 */
export const Loader = () => {
    return <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />

  
}
