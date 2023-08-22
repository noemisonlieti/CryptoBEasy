import Button from '@atoms/Button';

function Welcome() {
  return (
    <div className="h-screen flex flex-col justify-center bg-white">

      <header className="text-center text-DeepBlue">

        <img className="max-w-xs mx-auto mt-32" src="/media/welcome-header.png" alt="logo" />


        <h1 className=" text-4xl font-semibold mt-12">

          Crypto<i className="fa-brands fa-bitcoin text-DeepBlue text-4xl"></i>
          <span className="text-Purple font-bold text-4xl">e</span>asy

        </h1>


        <p className="mt-8 text-lg font-semibold">the simplest BTC Wallet ever</p>

      </header>
      


      <div className="mt-[51px] flex flex-col items-center justify-center gap-5 h-1/2 w-full bg-CardBgGlas bg-cover bg-no-repeat mx-auto rounded-t-[50px] border border-MiddleBlue/[.50] shadow-[0_4px_4px_(0, 0, 0, 0.25)] backdrop-blur-sm">

        <Button className='w-[146px]' to="/login">Log in</Button>
        
        <Button className='w-40' type="White" txt="tDeepBlue" to="/register" >Sign Up</Button>
        
      </div>   

     


    </div>
  );
}

export default Welcome;
