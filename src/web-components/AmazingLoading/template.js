export const template = document.createElement('template');

template.innerHTML = `
    <style>                               
        .loading {
          position: fixed;
          z-index: 9999;
          height: 2em;
          width: 2em;
          overflow: visible;
          margin: auto;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          visibility: hidden;
        }
        
        .loading:before {
          content: '';
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0,0,0,0.3);
        }
        
        .loading:after {
          content: '';
          display: block;
          font-size: 10px;
          width: 1em;
          height: 1em;
          margin: auto;
          animation: spinner 1500ms infinite linear;
          border-radius: 0.5em;
          box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) -1.5em 0 0 0, rgba(0, 0, 0, 0.75) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;
        }
        
     
        @keyframes spinner {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
    
    </style>
    
        <div class="container"> 
            <div id="loading" class="loading" onClick="this.getRootNode().host.hideLoading()">   
            </div>
        </div>
`
