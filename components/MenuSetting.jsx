import Image from "next/image";

const MenuSetting = () => {
  return (
    <div className="menu-setting-container  flex flex-col gap-[20px]">
      <div className="user-profile justify-end flex items-center gap-[8px]">
        <Image src={"/profile.png"} alt="user-avatar" width={45} height={45} />
        <Image src={"/polygon.svg"} alt="arrow" width={9} height={9} />
      </div>
      <div className="menu-settings bg-[#fff] h-[600px] border border-[#E2E2E2] flex flex-col gap-[20px] items-center px-[10px] py-[20px] rounded-[32px]">
        <h2 className="text-[20px] ">Settings</h2>
        <div className="w-full flex flex-col gap-[15px]">
          <div className="setting-option w-full bg-[#F7F8FA] rounded-[5px] px-[10px] h-[50px] flex items-center gap-[10px] ">
            <div className="setting-left">
              <Image
                src={"/language.svg"}
                alt="general"
                width={32}
                height={32}
              />
            </div>
            <div className="setting-right font-normal text-[14px] ">
              <h5>Language Settings</h5>
            </div>
          </div>
          <div className="setting-option w-full bg-[#F7F8FA] rounded-[5px] px-[10px] h-[50px] flex items-center gap-[10px] ">
            <div className="setting-left">
              <Image
                src={"/general.svg"}
                alt="general"
                width={32}
                height={32}
              />
            </div>
            <div className="setting-right font-normal  text-[14px] ">
              <h5>General Settings</h5>
            </div>
          </div>
          <div className="setting-option w-full bg-[#F7F8FA] rounded-[5px] px-[10px] h-[50px] flex items-center gap-[10px] ">
            <div className="setting-left">
              <Image
                src={"/dashboard.svg"}
                alt="dashboard"
                width={32}
                height={32}
              />
            </div>
            <div className="setting-right font-normal  text-[14px] ">
              <h5>Font Settings</h5>
            </div>
          </div>
          <div className="setting-bottom  flex flex-col  gap-[25px]">
            <div className="setting-option w-full bg-[#F7F8FA] rounded-[5px] px-[10px] h-[50px] flex items-center gap-[10px] border-l-4 border-[#1fa45b] ">
              <div className="setting-left">
                <Image src={"/dashboard.svg"} width={32} height={32} />
              </div>
              <div className="setting-right font-normal  text-[14px] ">
                <h5 className="text-[#1fa45b]">Apperance Settings</h5>
              </div>
            </div>
            <div className="night-mode w-full flex justify-between px-[10px]">
              <h5 className="font-normal  text-[14px]">Font Settings</h5>
              <Image
                src={"/night.svg"}
                alt="night-mood"
                width={30}
                height={16}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSetting;
