<template>
  <div class="relative min-h-screen flex items-top justify-center py-8 bg-gray-950 text-gray-200">
    <div class="fixed" style="padding-top:2rem; right:4rem">
      <a class="bg-gray-950 rounded px-4 py-2 text-xl text-white" href="https://enlightdistributions.com/">Return to Home</a>
    </div>
    <div class="fixed" style="padding-top:1.4rem; left:4rem">
      <a href="https://enlightdistributions.com/">
        <img style="height: 48px;" src="https://enlightstudiosnet.files.wordpress.com/2023/09/front-page-logoartboard-1_1-8.png" alt="Enlight Distributions">
      </a>
    </div>
    <div class="fixed" style="padding-top:2rem; right:4rem; bottom:4rem;" v-if="!loading && scriptFormatted && scriptFormatted.length" >
      <p class="bg-gray-950 rounded px-4 py-2 text-xl text-white cursor-pointer flex gap-2 align-center"
        @click="printPage"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-red-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.9 1.45275e-07C15.1711 -0.000139087 15.4326 0.0998069 15.6345 0.280666C15.8364 0.461524 15.9644 0.71056 15.994 0.98L16 1.1V4H17C17.7652 3.99996 18.5015 4.29233 19.0583 4.81728C19.615 5.34224 19.9501 6.06011 19.995 6.824L20 7V14C20.0002 14.5046 19.8096 14.9906 19.4665 15.3605C19.1234 15.7305 18.6532 15.9572 18.15 15.995L18 16H16V17.9C16.0001 18.1711 15.9002 18.4326 15.7193 18.6345C15.5385 18.8364 15.2894 18.9644 15.02 18.994L14.9 19H5.1C4.82894 19.0001 4.56738 18.9002 4.36548 18.7193C4.16358 18.5385 4.03557 18.2894 4.006 18.02L4 17.9V16H2C1.49542 16.0002 1.00943 15.8096 0.639452 15.4665C0.269471 15.1234 0.0428433 14.6532 0.00500012 14.15L4.66045e-09 14V7C-4.26217e-05 6.23479 0.292325 5.49849 0.817284 4.94174C1.34224 4.38499 2.06011 4.04989 2.824 4.005L3 4H4V1.1C3.99986 0.828942 4.09981 0.567377 4.28067 0.365479C4.46152 0.163582 4.71056 0.0355701 4.98 0.00600019L5.1 1.45275e-07H14.9ZM14 13H6V17H14V13ZM17 6H3C2.75507 6.00003 2.51866 6.08996 2.33563 6.25272C2.15259 6.41547 2.03566 6.63975 2.007 6.883L2 7V14H4V12.1C3.99986 11.8289 4.09981 11.5674 4.28067 11.3655C4.46152 11.1636 4.71056 11.0356 4.98 11.006L5.1 11H14.9C15.1711 10.9999 15.4326 11.0998 15.6345 11.2807C15.8364 11.4615 15.9644 11.7106 15.994 11.98L16 12.1V14H18V7C18 6.73478 17.8946 6.48043 17.7071 6.29289C17.5196 6.10536 17.2652 6 17 6ZM15 7C15.2549 7.00028 15.5 7.09788 15.6854 7.27285C15.8707 7.44782 15.9822 7.68695 15.9972 7.94139C16.0121 8.19584 15.9293 8.44638 15.7657 8.64183C15.6021 8.83729 15.3701 8.9629 15.117 8.993L15 9H13C12.7451 8.99972 12.5 8.90212 12.3146 8.72715C12.1293 8.55218 12.0178 8.31305 12.0028 8.05861C11.9879 7.80416 12.0707 7.55362 12.2343 7.35817C12.3979 7.16271 12.6299 7.0371 12.883 7.007L13 7H15ZM14 2H6V4H14V2Z"/>
        </svg>
        Print Script
      </p>
    </div>
    
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <div class="flex justify-center" style="margin-top: -40px; margin-bottom: -40px;">
        <a class="flex justify-center" href="https://enlightdistributions.com/" target="_blank">
          <img style="height: 240px;" src="https://enlightstudiosnet.files.wordpress.com/2023/10/nova_logo_no_background_v1artboard_5.png" alt="Enlight Distributions">
        </a>
      </div>
      
      <div class="mt-4 text-center">
        <h1 class="text-4xl text-gray-50 leading-snug" style="font-weight: 500; font-style: italic;">
          Nova AI Film Script Analysis
        </h1>
        <p class="mt-4 text-xl text-gray-200">
          Harness the insight of Nova to refine your film's marketing approach. Submit your script below, and we'll provide detailed marketing insights tailored for your narrative.<br>
        </p>
      </div>
      <div class="mt-8 flex flex-col items-center justify-center rounded-xl shadow shadow-xl p-6 bg-gray-900 text-gray-200">
        <div v-if="loading" class='flex flex-col items-center justify-center py-16'>
            <div style="border-top-color:transparent" class="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"></div>
            <p class="ml-2">
              {{loadingStatus}}
            </p>
        </div>
        
        <label v-if="!loading && !scriptFormatted" for="dropzone-file" class="mx-auto cursor-pointer flex w-full max-w-lg flex-col items-center text-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <h2 class="mt-4 text-xl font-medium tracking-wide">Film Script</h2>
          <p class="mt-2 tracking-wide">Click here to upload your PDF to be analyzed</p>
          <input id="dropzone-file" type="file" class="hidden" v-on:change="event=>upload(event)"/>
          <div class="bg-red-500 text-white my-4 py-4 w-full rounded-xl" v-if="error && error.length"> {{ error }} </div>
        </label>

        <div class="markdown_content" v-else-if="!loading && scriptFormatted && scriptFormatted.length" v-html=scriptFormatted></div>

        <div v-if="chartData.show" class="markdown_content text-center my-8">
          <hr />  
          <h1>Budget Percentages</h1>
          <Chart :chartData="chartData"/>
        </div>
      </div>  
    </div>
  </div>
</template>
<script>

export default {
  name: 'movies',
  data () {
    return {
      scriptRaw: '',
      error: '',
      loading: false,
      loadingStatus: 'Loading...'
    }
  },
  created () {
    if (process.env.PASSWORD_PROTECT) {
      let password_env = process.env.PASSWORD ? process.env.PASSWORD : '';
      let password = prompt('Enter password to view page',' ');
      if(password === password_env){
          alert('Correct password, click ok to enter');
          return true;
      } else {
          window.location="https://enlightdistributions.com/";
          return false;
      }
    }
  },
  computed: {
    scriptFormatted () {
      return this.scriptRaw.length ? marked.parse(this.scriptRaw, { xhtml: true }) : '';
    },
    chartData () {
      if (this.scriptFormatted.length === 0) return { show: false }; 
      
      const matches = [
        ...this.scriptFormatted.matchAll(/>(.+?)\s(\d+)%/g),
      ];
      const matchesLabels = matches.map(match => {
        let matchFormatted = match[1]
        matchFormatted = matchFormatted.replace('<li>','')
        matchFormatted = matchFormatted.replace('</li>','')
        matchFormatted = matchFormatted.replace('<p>','')
        matchFormatted = matchFormatted.replace('</p>','')
        return matchFormatted.trim()
      });
      const matchesDatasets = matches.map(match => {
        return parseInt(match[2], 10)
      });

      console.log(matchesLabels, matchesDatasets)

      if (matchesLabels.length === 0 || matchesDatasets.length === 0 ) return { show: false }; 
      if (matchesLabels.length !== matchesDatasets.length ) return { show: false }; 

      return {
        show: true,
        labels: [...matchesLabels],
        datasets: [{
            data: matchesDatasets,
        }]
      }
    }
  },
  methods: {
    async extractText(dataUrl) {
      const loadingTask = pdfjsLib.getDocument({ url: dataUrl });
      return loadingTask.promise.then((pdf) => {
        const maxPages = pdf.numPages;
        let text = '';
        let countPromises = [];

        for (let j = 1; j <= maxPages; j++) {
          const page = pdf.getPage(j);
          const txt = page.then((page) => {
            return page.getTextContent();
          });
          countPromises.push(txt);
          txt.then((content) => {
            content.items.forEach((item, index) => {
              const textItem = item.str;
              const nextItem = content.items[index + 1];
              // Check if the next item is on a new line
              const isOnNewLine = nextItem && nextItem.transform[5] !== item.transform[5];
              // Add a line break if necessary
              text += isOnNewLine ? textItem + '\n' : textItem;
            });
          });
        }
        return Promise.all(countPromises).then(() => {
          return text;
        });
      });
    },
    async processAI (script) {
      return await this.$axios.post('https://api.openai.com/v1/chat/completions', {
        model: 'gpt-3.5-turbo-16k',
        messages: [
          {
            role: 'system',
            content: "Using accordingly titles and list on Markdown Format for all the text. Never mention film festivals thoughout the whole analysis. Do not begin the output with a definition on what is market segmentation. Never mention the name of the movie. Under each type of segmentation, do not make a list, instead, make a block of text in markdown format. For each element in the segmentation analysis, provide reasoning on why based on the movie's content and be very specific on this, maybe even mentioning names in the process. Describe the target audience on each type of market segmentation. Add a lot of text to the segmentation analysis. Also be specific in areas of interest for an investor. Add text that explains how to capture the target audience with each element of the segmentation analysis. Use elements of the movie story into the marketing segmentation. The more text each element of the segmentation analysis has, the better. You will analyze the movie given and will apply market segmentation analysis, make this the priority and talk a lot about each element of the segementation analysis. Dive deep into each element of the market segmentation analysis. Make the results of the market segmentation very long with lots of detail. The more extensive the research, the better. Try to convince an investor with your findings. Please take into account the 4 types of market segmentation. For the market segmentation part: extend/develop more on each segmentation. Always give a age number estimate range of the audience when doing demographic segmentation. You are looking for a target audience and will describe it with a lot of details. For each element in the market segmentation analysis, you will expand/develop more on each. After the segmentation analysis part: Include a sole section of keywords for the targeted audience at the end of the market analysis in list format. Afterwards: include a comps section for similar films that would likely share it's audience. State a overall marketing plan using the results of the market segmentation analysis and make this a list. Make a marketing plan. Be specific in the marketing plan, give examples. After the marketing plan section, insert a new section with recommend percentages of the budget to each element of the marketing plan and give a bit of reasoning behind each. Give a bit of reasoning behind each percentage budget element. Give input towards creative assets, helping make the trailer and what the trailer should focus on. Maybe even include what specific scenes should be in the trailer. Don't forget anything! Include all of this into the analysis!. Remember to use markdown titles and lists in all places appropiate. Fit all the answer you will provide on one response."
          },
          {
            role: 'user',
            content: script
          }
        ],
        temperature: 0.8,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
      }, {
        headers: {
          'Authorization': `Bearer ${this.$config.OPEN_AI_KEY}`,
          'Content-Type': 'application/json'
        }
      }).then(response => {
        return {data: response.data.choices[0].message.content};
      }).catch(error => {
        return {error: error?.response?.data?.error?.message}
      });
    },
    // HAS TO BE MORE ACCURATE
    chunkscript (script) {
      let chunks = []
      const maxChunkSize = 4000
      let encodedText = script.split(/\s+/); // This splits the text by spaces

      for (let i = 0; i < encodedText.length; i += maxChunkSize) {
        chunks.push(encodedText.slice(i, i + maxChunkSize));
      }

      if (chunks.length == 0) {
        return {error: "Error importing text from PDF"}
      } else if (chunks.length == 1) {
        return chunks[0].join(' ')
      } else if (chunks.length == 1) {
        return chunks[0].join(' ') + chunks[chunks.length-1].join(' ')
      } else {
        return chunks[1].join(' ') + chunks[chunks.length-1].join(' ')
      }
    },
    
    async upload (event) {
      this.loading = true
      try {
        if (event.target.files.length == 0) throw "Problem uploading a PDF file";
        const file = event.target.files[0];
        if (file.type !== 'application/pdf' ) throw "Please upload a PDF file";
        
        
        const reader = new FileReader();
        reader.onload = async () => {
          try {
            // console.log("start")
            this.loadingStatus = "Uploading PDF..."
            let extractedText = await this.extractText(reader.result);
            if (extractedText.error) throw extractedText.error
            // console.log("extractText", extractedText.length)

            let chunkedScript = this.chunkscript(extractedText)
            if (chunkedScript.error) throw chunkedScript.error
            // console.log("chunkscript", chunkedScript.length)

            this.loadingStatus = "Analyzing PDF. This can take a while. Do not exit.  .."
            let scriptRaw = await this.processAI(chunkedScript)
            if (scriptRaw.error) throw scriptRaw.error
            else if (scriptRaw.data) this.scriptRaw = scriptRaw.data
            else throw "Something wrent wrong"
            // console.log("processAI", scriptRaw)
            this.loading = false
            this.loadingStatus = "Loading..."
          } catch (error) {
            console.log(error)
            this.error = error
            this.loading = false
            this.loadingStatus = "Loading..."
          }
        };
        reader.readAsDataURL(file);

        if (this.error.length) throw this.error
        this.error = ''
      } catch (error) {
        console.error(error)
        this.error = error
        this.loading = false
        this.loadingStatus = "Loading..."
      }
    },

    printPage () {
      if (window) {
        window.print();
      }
    }
  }
}
</script>
<style>
  .markdown_content h1 { font-size: 2.25rem;  margin-top:1.875rem; margin-bottom:1rem; font-weight: bold; }
  .markdown_content h2 { font-size: 1.875rem; margin-top:1.5rem; margin-bottom:1rem; font-weight: bold; }
  .markdown_content h3 { font-size: 1.5rem;   margin-top:1.25rem; margin-bottom:1rem; font-weight: bold; }
  .markdown_content h4 { font-size: 1.25rem;  margin-top:1.125rem; margin-bottom:1rem; font-weight: bold; }
  .markdown_content h5 { font-size: 1.125rem; margin-top:1rem; margin-bottom:1rem; font-weight: bold; }
  .markdown_content h6 { font-size: 1rem;     margin-top:1rem; margin-bottom:1rem; font-weight: bold; }
  .markdown_content b { font-weight: bold ;}
  .markdown_content i { font-style: italic;}
  .markdown_content i { font-style: italic;}
  .markdown_content ol { list-style: decimal; margin-left: 2rem;}
  .markdown_content ul { list-style: disc; margin-left: 2rem;}
  .markdown_content hr { margin: 2rem 0;}
</style>