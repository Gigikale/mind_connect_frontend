import * as React from "react";
import TextFormField from "../../components/formFields/TextFormField";


function HomePage() {
  return (
    <div className="flex flex-col pb-12 bg-slate-50">
      <div className="flex flex-col justify-center py-5 w-full whitespace-nowrap bg-white shadow-sm leading-[140%] max-md:max-w-full">
        <div className="flex justify-center items-center px-16 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 justify-between w-full max-w-[1192px] max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-col text-3xl font-bold tracking-wide text-blue-700">
              <div>MindConnect</div>
              <div className="shrink-0 mt-1 h-2 bg-blue-700 rounded-md" />
            </div>
            <div className="flex gap-5 justify-between my-auto text-base tracking-normal text-gray-400">
              <div className="flex gap-5 justify-between px-4 py-3 bg-gray-50 rounded-md border border-solid border-[color:var(--Grey-400,#98A2B3)]">
                <div>Search</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7b5d5964bf4db3f26e21e766437185137c09c65fa7bbd13efaf38e1f51fdce5?"
                  className="self-start w-5 aspect-square"
                />
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4690c87b58019dc0c24abb956a5b1a163cd3f9e8c393ae9c6a75399c8d82b18d?"
                className="my-auto w-6 aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 w-full text-base font-medium whitespace-nowrap bg-white border-b border-solid border-b-[color:var(--Grey-300,#D0D5DD)] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full max-w-[1209px] max-md:max-w-full">
          <div className="flex gap-5 justify-between pt-2 w-full max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-5 justify-between tracking-normal text-gray-500 leading-[140%] max-md:flex-wrap max-md:max-w-full">
              <div className="flex gap-2 justify-between px-4 py-3 text-blue-700 rounded-md">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bedf3a209ae506859d42e64437f32129f78b31f8d82398780d4bc92700a98628?"
                  className="self-start w-5 aspect-square"
                />
                <div>Home</div>
              </div>
              <div className="flex gap-2 justify-between px-4 py-3 rounded-md">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8b172113b50924704dfdf8aef1ca4268285eb43b8de2395da6593d116c08706?"
                  className="self-start w-5 aspect-square"
                />
                <div className="grow">Groups</div>
              </div>
              <div className="flex gap-2 justify-between px-4 py-3 rounded-md">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b31e47229265a637fced24fc54d53085013f80447c097d6953c32da8bfe08ad4?"
                  className="self-start w-5 aspect-square"
                />
                <div>Posts</div>
              </div>
              <div className="flex gap-2 justify-between px-4 py-3 rounded-md">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb402acc21f93b6ef1e80d2b2700114aa35edfebf6f8fb04fbb34c0b4fdfd40e?"
                  className="self-start w-5 aspect-square"
                />
                <div>Chat</div>
              </div>
            </div>
            <div className="flex gap-2 self-start text-center">
              <div className="justify-center items-center px-2.5 h-10 text-white bg-blue-600 aspect-square leading-[150%] rounded-[200px]">
                SA
              </div>
              <div className="grow my-auto tracking-normal text-gray-900 leading-[140%]">
                Septor April
              </div>
            </div>
          </div>
          <div className="mt-4 bg-blue-700 h-[3px] w-[120px]" />
        </div>
      </div>
      <div className="flex flex-col px-10 mt-6 justify-center  bg-white rounded border border-solid w-100">
         <TextFormField 
            id={'text'}
            type={"text"}
            placeHolder={"What's on your mind?"}
         />
        <div className="mx-5 mt-6 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col px-8 py-4 bg-gray-50 rounded-2xl border-b border-solid border-b-[color:var(--Grey-400,#98A2B3)] max-md:px-5 max-md:max-w-full">
                  <div className="flex gap-5 justify-between pr-1.5 w-full max-md:flex-wrap max-md:max-w-full">
                    <div className="flex gap-5 justify-between text-center whitespace-nowrap">
                      <div className="justify-center items-center px-5 h-12 text-xs font-medium leading-4 text-white bg-blue-600 aspect-square rounded-[200px]">
                        SA
                      </div>
                      <div className="flex flex-col flex-1 my-auto">
                        <div className="text-base font-semibold tracking-normal leading-6 text-gray-900">
                          Jane Doe
                        </div>
                        <div className="text-sm leading-5 text-gray-400">
                          37 min
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-5 justify-between my-auto">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e07f950cedccdedf85d6e560390b4e6bec306eda2479d06f94076be48f4286bc?"
                        className="w-6 aspect-square"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6536ec29deebf65e8721c749d6aba62ec2efe990a30c5178f0c88b5479e17608?"
                        className="w-6 aspect-square"
                      />
                    </div>
                  </div>
                  <div className="mt-4 text-base tracking-normal leading-6 text-gray-900 max-md:max-w-full">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary, making this the first true
                    generator on the Internet.
                  </div>
                  <div className="flex gap-5 justify-between mt-4 w-full text-sm leading-5 text-slate-600 max-md:flex-wrap max-md:max-w-full">
                    <div className="flex gap-1 justify-between whitespace-nowrap">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fee02ffa827a318216f6b5ccbeadb8ca651e9dcb5413ec02e709a04ff8b05d68?"
                        className="w-5 aspect-square fill-red-700"
                      />
                      <div>12</div>
                    </div>
                    <div className="flex-auto">9 comments</div>
                  </div>
                  <div className="self-center mt-2 max-w-full h-px bg-zinc-100 w-[626px]" />
                  <div className="flex gap-5 justify-between px-20 mt-2 w-full text-sm leading-5 whitespace-nowrap text-slate-600 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-1 justify-between">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/68ab678bf1d8f868db19263bdbc361486b983e597fa1f75e4abea1a019d65ca8?"
                        className="w-6 aspect-square"
                      />
                      <div className="grow my-auto">Like</div>
                    </div>
                    <div className="flex gap-1 justify-between">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae97ad12f4c358f3c39e614593e4643e9cf7f20cb293b603c19dc706c8173c13?"
                        className="w-6 aspect-square"
                      />
                      <div className="grow my-auto">Comment</div>
                    </div>
                    <div className="flex gap-1 justify-between">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9502773d63479e0152b0914826271537411774e16f49b41284c52140c416cca?"
                        className="w-6 aspect-square"
                      />
                      <div className="grow my-auto">Report</div>
                    </div>
                  </div>
                  <div className="self-center mt-2 max-w-full h-px bg-zinc-100 w-[626px]" />
                  <div className="flex gap-5 justify-between mt-6 max-md:flex-wrap max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="self-start w-12 aspect-square"
                    />
                    <div className="flex flex-col flex-1 justify-center max-md:max-w-full">
                      <div className="flex flex-col px-2.5 py-1 text-base tracking-normal text-gray-900 bg-white rounded-2xl max-md:max-w-full">
                        <div className="font-semibold text-center leading-[140%] max-md:max-w-full">
                          Jane Doe
                        </div>
                        <div className="mt-1 leading-6 max-md:max-w-full">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don't look even slightly believable.{" "}
                        </div>
                      </div>{" "}
                      <div className="flex gap-5 justify-between pr-12 mt-1 w-full text-sm leading-5 text-slate-600 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                        <div className="flex gap-4">
                          <div>32 min</div> <div>Like</div> <div>Reply</div>
                        </div>{" "}
                        <div className="flex gap-1 justify-between whitespace-nowrap">
                          <div>2</div>{" "}
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/56f11efc5c2631e4ec06d02c80380e32329d858cb1968906fc21df73aa210292?"
                            className="w-5 aspect-square fill-red-700"
                          />
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="flex gap-5 justify-between mt-6 max-md:flex-wrap max-md:max-w-full">
                    <div className="justify-center self-start px-5 py-5 text-xs font-medium leading-4 text-center text-white whitespace-nowrap bg-blue-600 aspect-[1.35] rounded-[200px]">
                      SA
                    </div>{" "}
                    <div className="flex flex-col flex-1 justify-center max-md:max-w-full">
                      <div className="flex flex-col px-3 py-1 text-base tracking-normal leading-6 text-gray-900 bg-white rounded-2xl max-md:max-w-full">
                        <div className="font-semibold text-center max-md:max-w-full">
                          Jane Doe
                        </div>{" "}
                        <div className="mt-1 max-md:max-w-full">
                          There are many variations of passages of Lorem Ipsum.{" "}
                        </div>
                      </div>{" "}
                      <div className="flex gap-5 justify-between pr-20 mt-1 w-full text-sm leading-5 text-slate-600 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                        <div className="flex gap-4">
                          <div>19 min</div> <div>Like</div> <div>Reply</div>
                        </div>{" "}
                        <div className="flex gap-1 justify-between whitespace-nowrap">
                          <div>2</div>{" "}
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/57a32a6e31f372f11194b6c8d01b6c5e854f7eb4917712a97f7bd203cc5f14dd?"
                            className="w-5 aspect-square fill-red-700"
                          />
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="flex gap-5 justify-between mt-6 max-md:flex-wrap max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="w-12 aspect-square"
                    />{" "}
                    <div className="flex gap-5 justify-between px-2.5 py-3 bg-white rounded border border-solid border-[color:var(--Gray-400,#BDBDBD)] max-md:flex-wrap max-md:max-w-full w-600px">
                      <div className="flex-auto text-base leading-6 text-neutral-500">
                        Write a comment
                      </div>{" "}
                      <div className="flex gap-1 justify-between text-sm leading-5 whitespace-nowrap text-slate-600">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c48f22f3c48957755b4ea57ceec92a8c50ee0aaf520184c13188200bd831c786?"
                          className="w-6 aspect-square"
                        />{" "}
                        <div className="grow my-auto">send</div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="flex flex-col px-8 py-4 mt-6 bg-gray-50 rounded-2xl border-b border-solid border-b-[color:var(--Grey-400,#98A2B3)] max-md:px-5 max-md:max-w-full">
                  <div className="flex gap-5 justify-between pr-1.5 w-full max-md:flex-wrap max-md:max-w-full">
                    <div className="flex gap-5 justify-between text-center whitespace-nowrap">
                      <div className="justify-center items-center px-5 h-12 text-xs font-medium leading-4 text-white bg-blue-600 aspect-square rounded-[200px]">
                        SA
                      </div>{" "}
                      <div className="flex flex-col flex-1 my-auto">
                        <div className="text-base font-semibold tracking-normal leading-6 text-gray-900">
                          Jane Doe
                        </div>{" "}
                        <div className="text-sm leading-5 text-gray-400">
                          37 min
                        </div>
                      </div>
                    </div>{" "}
                    <div className="flex gap-5 justify-between my-auto">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e07f950cedccdedf85d6e560390b4e6bec306eda2479d06f94076be48f4286bc?"
                        className="w-6 aspect-square"
                      />{" "}
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6536ec29deebf65e8721c749d6aba62ec2efe990a30c5178f0c88b5479e17608?"
                        className="w-6 aspect-square"
                      />
                    </div>
                  </div>{" "}
                  <div className="mt-4 text-base tracking-normal leading-6 text-gray-900 max-md:max-w-full">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary, making this the first true
                    generator on the Internet.
                  </div>{" "}
                  <div className="flex gap-5 justify-between mt-4 w-full text-sm leading-5 text-slate-600 max-md:flex-wrap max-md:max-w-full">
                    <div className="flex gap-1 justify-between whitespace-nowrap">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fee02ffa827a318216f6b5ccbeadb8ca651e9dcb5413ec02e709a04ff8b05d68?"
                        className="w-5 aspect-square fill-red-700"
                      />{" "}
                      <div>12</div>
                    </div>{" "}
                    <div className="flex-auto">9 comments</div>
                  </div>{" "}
                  <div className="self-center mt-2 max-w-full h-px bg-zinc-100 w-[626px]" />{" "}
                  <div className="flex gap-5 justify-between px-20 mt-2 w-full text-sm leading-5 whitespace-nowrap text-slate-600 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-1 justify-between">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/68ab678bf1d8f868db19263bdbc361486b983e597fa1f75e4abea1a019d65ca8?"
                        className="w-6 aspect-square"
                      />{" "}
                      <div className="grow my-auto">Like</div>
                    </div>{" "}
                    <div className="flex gap-1 justify-between">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae97ad12f4c358f3c39e614593e4643e9cf7f20cb293b603c19dc706c8173c13?"
                        className="w-6 aspect-square"
                      />{" "}
                      <div className="grow my-auto">Comment</div>
                    </div>{" "}
                    <div className="flex gap-1 justify-between">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9502773d63479e0152b0914826271537411774e16f49b41284c52140c416cca?"
                        className="w-6 aspect-square"
                      />{" "}
                      <div className="grow my-auto">Report</div>
                    </div>
                  </div>{" "}
                  <div className="self-center mt-2 max-w-full h-px bg-zinc-100 w-[626px]" />
                </div>{" "}
                <div className="flex flex-col px-8 py-4 mt-6 bg-gray-50 rounded-2xl border-b border-solid border-b-[color:var(--Grey-400,#98A2B3)] max-md:px-5 max-md:max-w-full">
                  <div className="flex gap-5 justify-between pr-1.5 w-full max-md:flex-wrap max-md:max-w-full">
                    <div className="flex gap-5 justify-between text-center whitespace-nowrap">
                      <img
                        loading="lazy"
                        srcSet="..."
                        className="w-12 aspect-square"
                      />{" "}
                      <div className="flex flex-col flex-1 my-auto">
                        <div className="text-base font-semibold tracking-normal leading-6 text-gray-900">
                          Jane Doe
                        </div>{" "}
                        <div className="text-sm leading-5 text-gray-400">
                          37 min
                        </div>
                      </div>
                    </div>{" "}
                    <div className="flex gap-5 justify-between my-auto">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e07f950cedccdedf85d6e560390b4e6bec306eda2479d06f94076be48f4286bc?"
                        className="w-6 aspect-square"
                      />{" "}
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6536ec29deebf65e8721c749d6aba62ec2efe990a30c5178f0c88b5479e17608?"
                        className="w-6 aspect-square"
                      />
                    </div>
                  </div>{" "}
                  <div className="mt-4 text-base tracking-normal leading-6 text-gray-900 max-md:max-w-full">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary, making this the first true
                    generator on the Internet.
                  </div>{" "}
                  <div className="flex gap-5 justify-between mt-4 w-full text-sm leading-5 text-slate-600 max-md:flex-wrap max-md:max-w-full">
                    <div className="flex gap-1 justify-between whitespace-nowrap">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1964fd9625bb68998c2bf64f072658ee86a801e0db7d5eaf35184eedc2e3f7f2?"
                        className="w-5 aspect-square fill-red-700"
                      />{" "}
                      <div>12</div>
                    </div>{" "}
                    <div className="flex-auto">9 comments</div>
                  </div>{" "}
                  <div className="self-center mt-2 max-w-full h-px bg-zinc-100 w-[626px]" />{" "}
                  <div className="flex gap-5 justify-between px-20 mt-2 w-full text-sm leading-5 whitespace-nowrap text-slate-600 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-1 justify-between">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/689a5dc16e7cb0b84991851ca7e8fdf5f7bf24b5e9ba443a02f48ca0b064ac39?"
                        className="w-6 aspect-square"
                      />{" "}
                      <div className="grow my-auto">Like</div>
                    </div>{" "}
                    <div className="flex gap-1 justify-between">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae97ad12f4c358f3c39e614593e4643e9cf7f20cb293b603c19dc706c8173c13?"
                        className="w-6 aspect-square"
                      />{" "}
                      <div className="grow my-auto">Comment</div>
                    </div>{" "}
                    <div className="flex gap-1 justify-between">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9502773d63479e0152b0914826271537411774e16f49b41284c52140c416cca?"
                        className="w-6 aspect-square"
                      />{" "}
                      <div className="grow my-auto">Report</div>
                    </div>
                  </div>{" "}
                  <div className="self-center mt-2 max-w-full h-px bg-zinc-100 w-[626px]" />
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-5 py-11 w-full text-base leading-6 bg-white shadow-sm max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col px-2 py-4 w-full bg-white rounded-2xl shadow-sm">
                  <div className="self-center font-semibold tracking-normal text-center text-blue-600">
                    Suggestions
                  </div>{" "}
                  <div className="shrink-0 mt-6 h-px bg-zinc-100" />{" "}
                  <div className="mt-8 text-2xl font-bold text-center text-gray-900">
                    Popular Groups
                  </div>{" "}
                  <div className="mt-2 text-sm leading-5 text-gray-400">
                    Here is a list of some very active groups you might be
                    interested in based on your location and engagements.
                  </div>{" "}
                  <div className="flex gap-5 justify-between py-3 mt-6 tracking-normal whitespace-nowrap">
                    <div className="grow text-gray-900">Meditation</div>{" "}
                    <div className="font-medium text-blue-700">Join</div>
                  </div>{" "}
                  <div className="flex gap-5 justify-between py-3 mt-4 tracking-normal whitespace-nowrap">
                    <div className="grow text-gray-900">
                      You Are What You Eat
                    </div>{" "}
                    <div className="font-medium text-blue-700">Join</div>
                  </div>{" "}
                  <div className="flex gap-5 justify-between py-3 mt-4 tracking-normal whitespace-nowrap">
                    <div className="grow text-gray-900">Jos Crisis PTSD</div>{" "}
                    <div className="font-medium text-blue-700">Join</div>
                  </div>{" "}
                  <div className="flex gap-5 justify-between py-3 mt-4 tracking-normal whitespace-nowrap">
                    <div className="grow text-gray-900">Grief & Loss Hugs</div>{" "}
                    <div className="font-medium text-blue-700">Join</div>
                  </div>
                </div>{" "}
                <img
                  loading="lazy"
                  srcSet="..."
                  className="mt-16 w-full aspect-[2.38] max-md:mt-10"
                />{" "}
                <div className="flex flex-col px-2 py-4 mt-16 w-full bg-white rounded-2xl shadow-sm max-md:mt-10">
                  <div className="self-center font-semibold tracking-normal text-center text-blue-600">
                    Messages
                  </div>{" "}
                  <div className="shrink-0 mt-6 h-px bg-zinc-100" />{" "}
                  <div className="mt-8 text-2xl font-bold text-center text-gray-900">
                    {" "}
                    Chats
                  </div>{" "}
                  <div className="mt-2 text-sm leading-5 text-gray-400 whitespace-nowrap">
                    Here is a list of people you chat with frequently.
                  </div>{" "}
                  <div className="flex gap-5 justify-between py-3 mt-6 tracking-normal whitespace-nowrap">
                    <div className="grow text-gray-900">Jane Doe</div>{" "}
                    <div className="font-medium text-emerald-500">Online</div>
                  </div>{" "}
                  <div className="flex gap-5 justify-between py-3 mt-4 tracking-normal whitespace-nowrap">
                    <div className="grow text-gray-900">Jane Doe</div>{" "}
                    <div className="font-medium text-gray-400">Offline</div>
                  </div>{" "}
                  <div className="flex gap-5 justify-between py-3 mt-4 tracking-normal whitespace-nowrap">
                    <div className="grow text-gray-900">Jane Doe</div>{" "}
                    <div className="font-medium text-emerald-600">Online</div>
                  </div>{" "}
                  <div className="flex gap-5 justify-between py-3 mt-4 tracking-normal whitespace-nowrap">
                    <div className="grow text-gray-900">Jane Doe</div>{" "}
                    <div className="font-medium text-gray-400">Offline</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="flex gap-4 justify-center self-center mt-16 text-base tracking-normal leading-6 text-blue-600 whitespace-nowrap max-md:mt-10">
          <div className="grow">View older posts</div>{" "}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad54d6b36a66e8e175a577cb019432571897eeacac761e925999a6abe8429bad?"
            className="w-6 aspect-square"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;