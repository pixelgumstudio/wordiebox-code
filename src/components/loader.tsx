
import { Oval } from "react-loader-spinner"



export const LoadingOverlay = () => {



  return (
        <div className="flex flex-col justify-center items-center bg-modalBlur absolute min-h-[100px] top-0 left-0 z-[350] w-full h-full">
        <Oval
          height={56}
          width={56}
          color="#21AB68"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel='oval-loading'
          secondaryColor="#4F7D54"
          strokeWidth={5}
          strokeWidthSecondary={5}
        />
      </div>
  )
}
