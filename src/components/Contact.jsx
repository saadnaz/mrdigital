
import styles from "../style";

const Contact = () => (
  <div id="contact" class="block rounded-lg bg-gray-300 p-6">

    <h1 class="block w-full text-center text-5xl text-green-600 mb-5">Nous contacter</h1>
    <form class="mb-4 md:flex md:flex-wrap md:justify-between" action="https://formspree.io/f/xqkvbgbz" method="post">
      <div class="relative mb-6 w-full" data-te-input-wrapper-init>
        <input
          type="text"
          class="peer border-green-300 border-2 block min-h-[auto] w-full rounded  px-3 py-[0.32rem]
          leading-[1.6] outline-none transition-all duration-200 ease-linear 
          focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 
          motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 
          "
          name="nom"
          placeholder="Nom" />

      </div>
      {/* [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 */}
      <div class="relative mb-6 w-full" data-te-input-wrapper-init>
        <input
          type="email"
          class="peer block  border-green-300 border-2 min-h-[auto] w-full rounded  px-3 py-[0.32rem] 
          leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 
          data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none
           dark:text-neutral-200 dark:placeholder:text-neutral-200 
           "
          id="exampleInput8"
          name="email"
          placeholder="Email" />

      </div>
      <div class="relative mb-6 w-full" data-te-input-wrapper-init>
        <textarea
          class="peer block min-h-[auto] w-full rounded border-green-300 border-2  px-3 py-[0.32rem] leading-[1.6] 
          outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 
          data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none
           dark:text-neutral-200 dark:placeholder:text-neutral-200 
           "

          name="message"
          rows="3"
          placeholder="Message"></textarea>

      </div>

      <button
        type="submit"
        class="dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] 
        inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal
         text-black bg-blue-gradient shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out 
         hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 
        active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
        dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        data-te-ripple-init
        data-te-ripple-color="light">
        Envoyer
      </button>
    </form>

  </div>
);

export default Contact;
