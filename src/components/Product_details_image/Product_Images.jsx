import React, { useState } from 'react'
export default function Product_Images() {

    const [selectedImage, setSelectedImage] = useState("https://s3-alpha-sig.figma.com/img/21d6/bcec/533545a2b1e10e90b8059bc1bc97eab5?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b-C~7qTpJcuv8oBl4LxeO2ZtinLEOcov9UYd33Xt9JNsYBtD3zkKthVCw-iDqKEbPd2nbzK3P6-FPgHBLrqQmCncGjMANT5ZZChAinH7BX7zCPKHVrY~K5tZkH0eRAMCeaLrsRuvKA0SkH86fNVBMT36MBDDpe1VDdr7lkFUPVrmbXklqpH7rP47hDNNi4cG-IEEdZ6rCzeMbjDSr51iTgvs3SBzpb6ifuNeF5wlARwGANAn4K7quRpufrtdBY7iGVah3ObSyALmMTqJrMs2dZ3RqRmgdRkFVb7s0IT8Rwrg2SDkXxKwbncaDLEwfzbFntvC6Tv-OYbaX2xJJbe4Lg__");

  return (
    <div className="product-images py">
      <div className="thumbnails">
        <img
          src='https://s3-alpha-sig.figma.com/img/21d6/bcec/533545a2b1e10e90b8059bc1bc97eab5?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b-C~7qTpJcuv8oBl4LxeO2ZtinLEOcov9UYd33Xt9JNsYBtD3zkKthVCw-iDqKEbPd2nbzK3P6-FPgHBLrqQmCncGjMANT5ZZChAinH7BX7zCPKHVrY~K5tZkH0eRAMCeaLrsRuvKA0SkH86fNVBMT36MBDDpe1VDdr7lkFUPVrmbXklqpH7rP47hDNNi4cG-IEEdZ6rCzeMbjDSr51iTgvs3SBzpb6ifuNeF5wlARwGANAn4K7quRpufrtdBY7iGVah3ObSyALmMTqJrMs2dZ3RqRmgdRkFVb7s0IT8Rwrg2SDkXxKwbncaDLEwfzbFntvC6Tv-OYbaX2xJJbe4Lg__'
          alt="Thumbnail 1"
          onClick={() => setSelectedImage("https://s3-alpha-sig.figma.com/img/21d6/bcec/533545a2b1e10e90b8059bc1bc97eab5?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b-C~7qTpJcuv8oBl4LxeO2ZtinLEOcov9UYd33Xt9JNsYBtD3zkKthVCw-iDqKEbPd2nbzK3P6-FPgHBLrqQmCncGjMANT5ZZChAinH7BX7zCPKHVrY~K5tZkH0eRAMCeaLrsRuvKA0SkH86fNVBMT36MBDDpe1VDdr7lkFUPVrmbXklqpH7rP47hDNNi4cG-IEEdZ6rCzeMbjDSr51iTgvs3SBzpb6ifuNeF5wlARwGANAn4K7quRpufrtdBY7iGVah3ObSyALmMTqJrMs2dZ3RqRmgdRkFVb7s0IT8Rwrg2SDkXxKwbncaDLEwfzbFntvC6Tv-OYbaX2xJJbe4Lg__")}
          className={selectedImage === "image-url-main.png" ? "active" : ""}
        />


        <img
          src="https://s3-alpha-sig.figma.com/img/51c4/5a78/b417beff6f8fa6310534f3755fd23c5a?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y3bVS4YcKQjAQx6iAJtaVJcxrnP0GFwKmUnOrlLuAPbf9E35hxJiJRQtHHik9BRlGvgvkpOKw9fDNfQ8rMp612iDKE8NFRN2ij2q9RCc8kOnFhJze-VfCE3A9QIzDGMsy-px9-VGCYPnHXg7EZChN9oRQ8OusS9iYviRR7RVlnZ5V-NTKmqmXhm4R~tlxwJouKEq42zCPYA4j~oPhl3f8-qN70FIZZ8GQz32TxIcWASqYEzN4UaMJnhZ4WDr13AfH-WNUeSbWz6i0sUUBcfahbveE4aoeXqPe8WfejVUpyxFluR8hGfHdwnbK71YOwwMS~M~CpFMgvWubkOZVJqH-w__"
          alt="Thumbnail 2"
          onClick={() => setSelectedImage("https://s3-alpha-sig.figma.com/img/51c4/5a78/b417beff6f8fa6310534f3755fd23c5a?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y3bVS4YcKQjAQx6iAJtaVJcxrnP0GFwKmUnOrlLuAPbf9E35hxJiJRQtHHik9BRlGvgvkpOKw9fDNfQ8rMp612iDKE8NFRN2ij2q9RCc8kOnFhJze-VfCE3A9QIzDGMsy-px9-VGCYPnHXg7EZChN9oRQ8OusS9iYviRR7RVlnZ5V-NTKmqmXhm4R~tlxwJouKEq42zCPYA4j~oPhl3f8-qN70FIZZ8GQz32TxIcWASqYEzN4UaMJnhZ4WDr13AfH-WNUeSbWz6i0sUUBcfahbveE4aoeXqPe8WfejVUpyxFluR8hGfHdwnbK71YOwwMS~M~CpFMgvWubkOZVJqH-w__")}
          className={selectedImage === "image-url-thumb2.png" ? "active" : ""}
        />


        <img
          src="https://s3-alpha-sig.figma.com/img/52ce/3b46/9d8d7ff6e33f95a574450e07218fc909?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mV3Xn-HoGhI-mZnq~2TrnSW3tU9nYd0mPHwMXUvH3naHJB-dwo1nHWFVVFezwMNNGP-SO9LfPOYCswZDF2oC6NoVHtOzgfy9J8nTyStIIlCAJ0wYf804u0t6BLLXwv2EP3998G6FsKIPuVXk90T8NIf3U5nVgm841U13qzuWFcZ1eenc~KJN6BjCfqGOo~gdCh6c2-LcBRImjtN9EfsnDORVgUAPt2nXazcIxvMNyEYeUiCEX90-vzzCY05egQDD18LqG1ESLDAnH3l33~SfDAZutygpEzKknrMZtT-NViFC9SWhQT9b0ocW55chT2liL2mSsdZc68OeY-Q370yWLg__"
          alt="Thumbnail 3"
          onClick={() => setSelectedImage("https://s3-alpha-sig.figma.com/img/52ce/3b46/9d8d7ff6e33f95a574450e07218fc909?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mV3Xn-HoGhI-mZnq~2TrnSW3tU9nYd0mPHwMXUvH3naHJB-dwo1nHWFVVFezwMNNGP-SO9LfPOYCswZDF2oC6NoVHtOzgfy9J8nTyStIIlCAJ0wYf804u0t6BLLXwv2EP3998G6FsKIPuVXk90T8NIf3U5nVgm841U13qzuWFcZ1eenc~KJN6BjCfqGOo~gdCh6c2-LcBRImjtN9EfsnDORVgUAPt2nXazcIxvMNyEYeUiCEX90-vzzCY05egQDD18LqG1ESLDAnH3l33~SfDAZutygpEzKknrMZtT-NViFC9SWhQT9b0ocW55chT2liL2mSsdZc68OeY-Q370yWLg__")}
          className={selectedImage === "image-url-thumb3.png" ? "active" : ""}
        />
        
      </div>
      <div className="main-image-container">
        <img src={selectedImage} alt="Selected Product" className="main-image" />
      </div>
    </div>
  )
}
