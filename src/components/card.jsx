 
import images from '../assets/images/food copy.png';   




const Card = () => {
    return (
        <>
           
                <div className="borders-3
                w-[192px] h-[226px] bg-[#1f1d2b] rounded-[15px] text-[white] text-center
                flex flex-col items-center justify-between relative cursor-pointer border-[#393c4900]
                text-[0.7em] p-[120px] pb-[30px] px-[40px]
                duration-300 ease-out hover:ease-in"
                >
                  <img
                    src={images}
                    alt=""
                    className="w-[132px] h-[132px] absolute bottom-[125px]"
                  />
                  <h3>Spicy seasoned seafood noodles</h3>
                  <p>$ 2.29</p>
                  <h4 className='text-[#abbbc2] font-light'>20 Bowls availabel</h4>
                </div>
              
        </>
    );
};

export default Card;