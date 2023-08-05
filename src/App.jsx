import images from './assets/images/food copy.png';
import logo from './assets/images/logo.svg';
import vector from './assets/images/Vector.svg';
import Card from './components/card';


function App() {
  return (
    <>
      <main className="grid grid-cols-[104px_minmax(104px,_1fr)_406px]">
        <div className="">
          <div
            className="px-[0px] py-[20px] 
        bg-[#1f1d2b] h-[100vh] flex flex-col  items-center 
        justify-between fixed  w-[104px]  
        rounded-tr-[15px] rounded-br-[15px]"
          >
            <div
              className="
           bg-[#ea966942] w-[56px] h-[56px] flex rounded-[15px] justify-center items-center shrink-0"
            >
              <img src={logo} className="w-[36px] h-[36px]" alt="logo" />
            </div>

            <div className="sidebar-menu  h-[100%] flex flex-col justify-evenly pb-[50px]">
              <div
                className="sidebar-hover duration-300 ease-out hover:ease-in active-item
            flex justify-center items-center relative  cursor-pointer rounded-[15px] border-[#ea7c6900] w-[56px] h-[56px]"
              >
                <img src={vector} alt="" className="w-[36px] h-[36px]" />
              </div>
              <div
                className="sidebar-hover  duration-300 ease-out hover:ease-in 
            flex justify-center items-center relative z-10 cursor-pointer rounded-[15px] border-[#ea7c6900] w-[56px] h-[56px]"
              >
                <img src={images} alt="" className="w-[36px] h-[36px]" />
              </div>
              <div
                className="sidebar-hover duration-300 ease-out hover:ease-in
            
            flex justify-center items-center relative z-10 cursor-pointer rounded-[15px] border-[#ea7c6900] w-[56px] h-[56px]"
              >
                <img src={images} alt="" className="w-[36px] h-[36px]" />
              </div>
              <div
                className="sidebar-hover duration-300 ease-out hover:ease-in
            
            flex justify-center items-center relative z-10 cursor-pointer rounded-[15px] border-[#ea7c6900] w-[56px] h-[56px]"
              >
                <img src={images} alt="" className="w-[36px] h-[36px]" />
              </div>
              <div
                className="sidebar-hover duration-300 ease-out hover:ease-in
            
            flex justify-center items-center relative z-10 cursor-pointer rounded-[15px] border-[#ea7c6900] w-[56px] h-[56px]"
              >
                <img src={images} alt="" className="w-[36px] h-[36px]" />
              </div>
              <div
                className="sidebar-hover duration-300 ease-out hover:ease-in
            
            flex justify-center items-center relative z-10 cursor-pointer rounded-[15px] border-[#ea7c6900] w-[56px] h-[56px]"
              >
                <img src={images} alt="" className="w-[36px] h-[36px]" />
              </div>
            </div>
            <div
              className="sidebar-hover w-[56px] h-[56px] rounded-[15px] flex
          justify-center items-center shrink-0 border-[#ea7c6900]
          duration-300 ease-out hover:ease-in "
            >
              <img src={images} alt="log out" className="w-[36px] h-[36px]" />
            </div>
          </div>
        </div>

        <div className="">
          <div className="pt-[25px] pr-[25px] pb-[0px] pl-[25px]">
            <header>
              <div
                className="main-title flex justify-between items-center
              h-[65px] text-[white] mb-[35px]"
              >
                <div className="">
                  <h1 className="font-bold text-[2rem]">Thai Restaurant</h1>
                  <p>Thusday, 2 Feb 2023</p>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for etc..."
                    className="w-[220px] h-[48px] rounded-[5px] borders-1
                pl-[35px] text-[#abbbc2] bg-[#2d303e]"
                  />
                  {/* <img src={images} alt="" /> */}
                </div>
              </div>

              <div className="">
                <div className="mb-4">
                  <ul
                    className="flex flex-wrap -mb-px text-sm font-medium text-center"
                    id="myTab"
                    data-tabs-toggle="#myTabContent"
                    role="tablist"
                  >
                    <li className="mr-2" role="presentation">
                      <button
                        className="inline-block p-4 border-b-2 rounded-t-lg tab-hover text-[white] 
                      text-[1rem] tab-border-hover"
                        id="profile-tab"
                        data-tabs-target="#profile"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Hot Dishes
                      </button>
                    </li>
                    <li className="mr-2" role="presentation">
                      <button
                        className="inline-block p-4 border-b-2 border-transparent rounded-t-lg
                          text-[white] 
                       tab-hover text-[1rem] tab-border-hover"
                        id="dashboard-tab"
                        data-tabs-target="#dashboard"
                        type="button"
                        role="tab"
                        aria-controls="dashboard"
                        aria-selected="false"
                      >
                        Cold Dishes
                      </button>
                    </li>
                  </ul>
                </div>
                <div id="myTabContent">
                  {/* <div
                  className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    This is some placeholder content the{' '}
                    <strong className="font-medium text-gray-800 dark:text-white">
                      Profile tabs associated content
                    </strong>
                    . Clicking another tab will toggle the visibility of this
                    one for the next. The tab JavaScript swaps classNamees to
                    control the content visibility and styling.
                  </p>
                </div>

                <div
                  className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                  id="dashboard"
                  role="tabpanel"
                  aria-labelledby="dashboard-tab"
                >
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    This is some placeholder content the{' '}
                    <strong className="font-medium text-gray-800 dark:text-white">
                      Dashboard tabs associated content
                    </strong>
                    . Clicking another tab will toggle the visibility of this
                    one for the next. The tab JavaScript swaps classNamees to
                    control the content visibility and styling.
                  </p>
                </div> */}
                </div>
              </div>
            </header>

            <div className="">
              <div
                className="flex 
              justify-between text-[white]"
              >
                <h2 className="font-bold text-[1.5rem]">Choose Dishes</h2>
                <div
                  className="borders-1
                flex justify-evenly items-center 
                w-[100px] h-[48px] bg-[#1f1d2b] rounded-[5px] "
                >
                  <img src={images} alt="" className="w-[20px] h-[20px]" />
                  <p>Dine In</p>
                </div>
              </div>

              <div className=" mt-[50px] grid grid-cols-3 justify-items-center gap-[50px]">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>
        </div>

        <div
          className="h-[100vh] p-[25px] bg-[#1f1d2b] w-[406px]
         fixed flex overflow-hidden right-0 justify-between flex-col"
        >
          <div className="h-[400px] overflow-hidden"></div>
        </div>
      </main>
    </>
  );
}

export default App;
