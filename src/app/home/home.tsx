export default function home() {
  return (
    <div className="w-[1440px] h-[960px] relative bg-blue-950">

      <div className="w-[1439px] h-[759px] p-[120px] left-0 top-[100px] absolute bg-gradient-to-b from-zinc-900 to-zinc-900" />
      <div className="left-[1357px] top-[558px] absolute flex-col justify-start items-start gap-4 inline-flex">
        <div className="w-[9px] h-[9px] bg-neutral-200 rounded-full" />
        <div className="w-[9px] h-[9px] rounded-full border border-neutral-200" />
        <div className="w-[9px] h-[9px] rounded-full border border-neutral-200" />
      </div>
      <div className="left-[120px] top-[300px] absolute flex-col justify-start items-start gap-6 inline-flex">
        <div className="justify-start items-center gap-8 inline-flex">
          <div className="w-[72px] h-0.5 bg-amber-200" />
          <div className="justify-start items-center gap-3 flex">
            <div className="text-neutral-200 text-xl font-normal font-['SVN-Gilroy']">
              Xin mời
            </div>
            <div className="w-32 p-3 bg-amber-200 rounded-xl justify-center items-center gap-4 flex">
              <div className="text-center text-blue-950 text-lg font-semibold font-['Montserrat'] leading-[27px]">
                Đăng nhập
              </div>
            </div>
            <div className="text-neutral-200 text-xl font-normal font-['SVN-Gilroy']">
              để bắt đầu
            </div>
          </div>
        </div>
        <div className="w-[1023px] text-neutral-200 text-[66px] font-semibold font-['SVN-Gilroy'] leading-[100px]">
          Chào buổi sáng
        </div>
      </div>
      <div className="w-[1439px] h-20 px-[120px] py-2.5 left-0 top-0 absolute bg-blue-950 justify-between items-center inline-flex">
        <img
          className="w-[169.23px] h-11"
          src="https://via.placeholder.com/169x44"
        />
        <div className="justify-center items-center gap-12 flex">
          <div className="text-white text-base font-semibold font-['SVN-Gilroy'] uppercase">
            về chúng tôi
          </div>
          <div className="text-white text-base font-semibold font-['SVN-Gilroy'] uppercase">
            dịch vụ
          </div>
          <div className="text-white text-base font-semibold font-['SVN-Gilroy'] uppercase">
            liên hệ
          </div>
          <div className="w-[155px] h-12 px-4 py-1 bg-amber-200 rounded-xl justify-center items-center gap-2.5 flex">
            <div className="text-blue-950 text-base font-semibold font-['SVN-Gilroy']">
              Tài khoản
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
