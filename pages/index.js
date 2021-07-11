/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                ADM Livre - Seu painel de lojista
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                ADM Livre é o seu painel definitivo para vender no Mercado Livre. Gerencie produtos, pedidos, anúncios, tudo em um único lugar!
              </p>
              <div className="mt-12">
                <Link href="/auth/register">
                  <a
                    href="#/auth/register"
                    className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  >
                    Crie sua conta
                  </a>
                </Link>

                <Link href="/auth/login">
                  <a
                    href="#/auth/login"
                    className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                  >
                    Acesse sua conta
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
          src="/img/pattern_nextjs-2.png"
          alt="..."
        />
      </section>
      <section className="block relative z-1 bg-blueGray-600">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Gerenciador de Produtos
                  </h5>
                  <Link href="/auth/login">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/login.jpg"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Gerenciador de Pedidos
                  </h5>
                  <Link href="/profile">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/login.jpg"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Gerenciador de Anúncios
                  </h5>
                  <Link href="/landing">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/login.jpg"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="pb-16 bg-blueGray-200 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
                <span role="img" aria-label="love">
                  😍
                </span>
              </p>
              <h3 className="font-semibold text-3xl">
                E aí? Deu água na boca?!
              </h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                Se você ainda não é cliente ADM Livre, inscreva-se agora e experimente todas as nossas funcionalidades sem custos por 30 dias
              </p>
              <div className="sm:block flex flex-col mt-10">
                <Link href="/auth/register">
                  <a
                    href="#/auth/register"
                    className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                  >
                    <span>Criar minha conta</span>
                  </a>
                </Link>
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
