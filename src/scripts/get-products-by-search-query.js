export const  getProductsBySearchQuery = ({
    query,
    products,
}) => products.reduce((acc, {ProductName, author, tags, ...product}) => {

    if(!query.trim()){
        return products ;
    }
    const adaptedQuery = query.toLowerCase().split(' ');

    const adaptedName = ProductName.toLowerCase().split(' ');
    const adaptedAuthor = author.toLowerCase().split(' ');
 
    const isInNameMatch = adaptedName.some(str=> adaptedQuery.find(qword => qword.includes(str) || str.includes(qword) ));
    const isInAuthorMatch = adaptedAuthor.some(str => adaptedQuery.find(qword => qword.includes(str) || str.includes(qword) ));
    const isInTagsMatch = tags.some(tag=> adaptedQuery.find(qword => qword.includes(tag.toLowerCase()) || tag.toLowerCase().includes(qword) ) );
     
   return isInNameMatch || isInAuthorMatch || isInTagsMatch 
   ? [...acc, {ProductName, author, tags, ...product}] 
   : acc;
}, []);