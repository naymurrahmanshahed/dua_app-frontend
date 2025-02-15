import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="bg-[#FFFFFF] h-[650px] py-[30px] px-[10px] flex flex-col items-center justify-between rounded-[24px] ">
      <div className="brand">
        <Image src="/brand.png" alt="Brand Logo" width={73} height={73} />
      </div>
      <div className="sidebar-menu flex flex-col gap-[15px]">
        <Image src="/home.svg" alt="home-icon" width={32} height={32} />
        <Image
          src="/dashboard.svg"
          alt="dashboard-icon"
          width={32}
          height={32}
        />
        <Image src="/memorize.svg" alt="memorize-icon" width={32} height={32} />
        <Image src="/bookmark.svg" alt="bookmark-icon" width={32} height={32} />
        <Image src="/ruqyah.svg" alt="ruqyah-icon" width={32} height={32} />
        <Image src="/qa.svg" alt="qa-icon" width={32} height={32} />
        <Image src="/book.svg" alt="book-icon" width={32} height={32} />
      </div>
      <div className="support-icon">
        <Image src="/support.svg" alt="support-icon" width={57} height={56} />
      </div>
    </div>
  );
};

export default Sidebar;
