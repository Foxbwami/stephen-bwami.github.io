// Render the About page's editable updates and photo journal from a single content file.
(async function(){
  const updatesRoot=document.getElementById('about-updates');
  const galleryRoot=document.getElementById('about-gallery');
  if(!updatesRoot || !galleryRoot) return;
  try{
    const response=await fetch('data/about-content.json',{cache:'no-store'});
    if(!response.ok) throw new Error('About content could not be loaded');
    const content=await response.json();
    const updates=Array.isArray(content.updates)?content.updates:[];
    const gallery=Array.isArray(content.gallery)?content.gallery:[];
    updatesRoot.innerHTML='';
    if(!updates.length){
      updatesRoot.innerHTML='<p class="about-empty-state">New milestones and event updates will appear here as I add them.</p>';
    }else{
      updates.forEach(item=>{
        const article=document.createElement('article');
        article.className='about-update-card';
        const date=document.createElement('span'); date.className='update-date'; date.textContent=item.date||'Milestone';
        const title=document.createElement('h3'); title.textContent=item.title||'Update';
        const description=document.createElement('p'); description.textContent=item.description||'';
        article.append(date,title,description);
        updatesRoot.append(article);
      });
    }
    if(gallery.length){
      galleryRoot.innerHTML='';
      gallery.forEach((item,index)=>{
        const figure=document.createElement('figure');
        if(index===1) figure.className='gallery-tall';
        const img=document.createElement('img'); img.src=item.image; img.alt=item.alt||item.caption||'Photo from Stephen Bwami’s journey'; img.loading='lazy';
        const caption=document.createElement('figcaption'); caption.textContent=item.caption||'A moment along the way';
        figure.append(img,caption); galleryRoot.append(figure);
      });
    }
  }catch(error){ console.warn('About page content:',error); }
})();