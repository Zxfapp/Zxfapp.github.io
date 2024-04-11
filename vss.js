
	var timevb = setInterval(() => {
		if (document.querySelector("div.landing-wrapper-before")) {
			document.querySelector(".landing-wrapper-before").setAttribute("style",
				'background:inherit;')
			clearInterval(timevb)
		}
	}, 200)


	var timev2 = setInterval(() => {
		if (document.querySelector("._akaz")) {
			document.querySelector("._aka-").remove();
			document.querySelector("._akaz").insertAdjacentHTML("afterbegin",
				"<img style='width:64px;' src='data:image/png;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAQKADAAQAAAABAAAAQAAAAABGUUKwAAAVsElEQVRoBY1aeXRc5XWfXTOjGc2MFsv7Isur5FVehHdjGwh7CgltWgpOS07A9MAptAnntOekp6eH5OS0TSjpH80pTQkJNasNGGxiDLaxMHiRsQy25U2SrX0fzYxmfa+/e+97b76RJU4+je/c7/vu/d3lW98b23Vdt91URvSRy7nmq9qVIX0opo1k7BkRs9vtYEBv0lAaAAgBgRWG5UXxm3EKZWxu3RNwBML2SJWzutoxL2gPKmYMlhxSW2N67FjmSFPurK5r5EdhUQ2oPZADikgLI6BquxGVYCpBFsirCSqUcdjsta5lG9ybAvZAgWk1gMu5S++l9qT1tCpRaIAya8Q1YYeirThB8YkK9SuVAhkeupsMWCIeu+eeovuqnfMtG/kROJU58VH6Q5igYmmAV2wZHhhCLClkIpmJ2hXVCfFVXUXIrtu2Fd1W514tGC75upRtPpg8oJODXKCsIdXMaxwDKAq1MyUCKB0UzbpGCwOUhTjTBpfnSR7rR+R5IeUH39Qz7EtVpUoHIOBqiT00z0Xj4MC/mD7ybvItDZMemZei8Rco+WRQi0EjPtYfMbomFAyDEB0rr+VIR8vhA3ShhrnxvhiHQIgxKRgCsWnvjL4Ft40AjiQ/SWopyMERQ4EZgYVrKOQgByOUQM3YmCFlSbqmwXsbKAorsj4BQseQEQaUGJNaDDeQMyigeRR2gk1raT0Ft4HpimrRM6nTujFjgCfzBrpgxJ4w0g4r0KICCcwj0LAjUuWuLnOUFdsD2PVAHXZHXIvF9Hhcjw3lBltyV3ty3bCOacbxYxsgRrZjtV0AZY6S1bw3cIsNsvsspsHtDUWbXc2Z8/BeXFIoechV0sOuINpMjXU/3T2jxr1krnteqaNMJFU6pnFEG7mavXwh/fXl7CX2gVyzBs1wDfq0rJjSGI4fsOWPbss1Zy7Yfx99+UoGoFCkFcYAqieULdYxRgB9M12zNnq3zHHPLZDLV5A4QNHqurl057qOjn5yPv21lSAVXwxJPAXjzimU/VuVqXbPt/9q8N/7tX6yRAPG2/DNZs2WiLP07uL7Z7urzAZS68p1XUlfasu2xrRoTIsl9ATmrc9RzNOpeJp7xlxX9XT3TIcSUm+uZ19s7/VcG+FQyq1wlMoETquBlbkq7M/3/1OaVjBQ2HtQioWGz8iE2bzYs+SewLeL7EUkjL1LG2kYPdqU+hLTXVoMOh4OtBZ6Fm/wby53VogYdpKP4wePjR7h4TLmq+pcAaZaUfA9Nrf9Jz3Pqb0384jErju+Fbx7lXet9I5o0aOJT06nTuW0jAzrHzN6SLNdty/y1mzxb6twVgrU5XTzm9HdSVuSEFDUCAoGIz+N1eRCw7n52Q2khlKgYLgk7feXPLjCu4qFbM2pC68Mv9SSvqbpOe5FBtm2UBEy6Zj5DUM9me7G5Mkihxd7AKRKnWWz3XOakmdyBhprAs+czjwhYMHYSGRSCCVROwWw3vBfNk7yIy+G2u3Bu1b5KPcY9AMj+94feSejZ0jXnFoEpBSoSBfaLCAwlFymOFEupS52Zzurixa47K4SZ2iKa+rXqbO0lRfoEiha8BGGvgoLMJ2bnlkvQmzAGgxjR1pXvHFrYDu0gLM3+saJxGfsHAUZckTmeuZWOqfEc/GUlmQQeEjWhIJRgyTvKWYSRFdvtrs107LEu9xpd5a5ykscofPJrwrl84kg+1TIrslwXbfhLiSASDA5DYoeZrQyZ/n2wB2sYDsQ3Xc6fhIGeHu2bQ3s2BzYJhsLbq8v9v3rUHbQjB5pBCrhMDEpGxJj1G/T21LXdg/+9nuljwJnhW/VueTZ5uR5zDqYMHygEYMsOUQozJIqFaa6zYHThG8J5DkYaicj9Hdn6D4MMWRPJ04cix9GB24HoHXeNQigMXHyhZ6f/6r332B+nX8Tw9C5b/0Rw1cQvg3QWQmGTBND5kEvJs9/MPwut9nuDN7rsrnIhPgAGfxJQUwooPTJo6LiwD9TgRgxBpQFRYvmFy0EdEKLwwZaUCDg1J3bgrdfSV3aM/gaVmRnuv2r0bPLfXVuPD9BmyCMP3zRpGZK9tk0m6dWYlj+89innZl2GMJEWh/YjDZpJ4+pQoXUxTOGQRVg4rnDlIE0s6CcnA3BLfhGOTC8L5GLoY+7tVrv0oAzeHD4A/aHkI/HPvU6vEt9KwznCNwwR6GMlyCybvhAd9S9g29AELaw5LBlG5kWAcIqGD3yBMWMzkGhsZAKGnSEZnnmQCyaGz4ZO24Kk2iFqxK7UFuqhUEIqy3d0pXpWBvAZsBuGYD0xS1CC5xAk6iTCC2GlsvJi2jxO4qrvPOocUyhgAHGeRfGENAoAGiiCCPtS3zLZPWcTTRy5vNzN+yKDOeGKMkK6PGRY1Pd0xCbBXIzJmYgenkmGozYEpwz8dOistS3TNotlyzGkFe+0EVTSEARAs1yGkq9xr9U4M7ETqmGITycHcLOjUsfvCBd/kxyT4J8RksLmoUJW6IOBo1CLYYbjKHAQsrqWYDU+JbyxDMUxTdIjouDRlrEAqQkVC930Y0lqY1eT7VwryEDvjvdhSfrSe7JogVaH9iwLrj5aPTj/kyfyFnSlq9g0CjUYlClFi0HOpqN30i1wqjX4cNEAizPCaIWIxbFYZ4AZAdTiATow4GDuuzOYie9uqCtnRMnFNJQOxf/EmtgbWAd2dY1p83xrci95xPn9vW/TQhopTXHskZqjHCoTQyRohqMsVmROS4hZ4jAcRowtRhUGYThiSUGARgGZIxAg44SWQBAhIsQEsoattFc/EzsZF2wPugsgbmMlonlRiKuUhw2hCRgBiS7bBKAgAVlxqCqghJAWCwKhV0UocxaNojhbZRcy/8VO4w3R/CMc58/H8SHPwy8jwi/XfYQqhB4u2/3ZM/UOyJ3szeGMA8GGWUEsmv5QdZQhHI2uaaP5KLUbrPhQSKvSXIUttCxgWG+EA5vtHReU8Ueyxr3e0wkKMBXrFgZE3mpMpDp29//zj3lD6wJrvs8+umF+LnPho9sCe/oTfegyj6wiwBWnvKAUOYuW+ivrfbND7nCQVdJsaM4qSWxU8P1a6NXIm4MIxU0ml7BJdkAcZ0GQ3cJgTYNaAgAvNqoD2UGGMcWcoYpJGgJpW/jQnZ48OB8/+L7K77bnrp+Pdn6Vu/ukCvy4KTv5fTsiehnbEkMUwy4a6wsWXNr5PZKzxRBtqjHUVTiCqG6yF8Lio0oraVTudQYr+QWCIpCvkiqueasf3KlRMZhkLO46G8I3+pxeHAROjTwoYQORAalGAjFpl+Mf7UiuGpNybpzscZYduRsrHG2r2pzZLvf6b+cuCj3e9zMFvmXPDbtyTUl63F+k0WzYCdA4jEsct2SZrzOcDvcC/yLsSO3JVtkANEFozQRuHBNkg5qtz994TGZHiINCoUnZzw710/vvX7R+nxr8pqgj6GItcxd8dSsH+OJ9JdtPxvJDjvsznsqHtgU2TaY6f+g750vY6f+auquBcWLLcXOVPu52JmL8a9vpK6nMU+4A5tyuWfSwuKaxcVLxKjIfxX78vddv8GegSp5ytSCEgaeO9fuWgmn2XvKK4+SrcjhWxSgMU1oieY43rsY11phQAU0kYs3J85viGytDSz/OtYUz8UuxL+6lLgwz79wfWTL9rI74ZlYakte2931yt6e3c2JCwOZfkwV8R69GKuRLNbA5S+GG+A0NrfKIpppkzyTlwXrGqMnsSTEnECpFJ4463etkCZ2jmLAJ5od2ly6A/FhZh8Z+IhG7aYgRSuaHW4ZvVIf3nhLeOP1ZMtAug/pPz50dF7xwlI3vS/Cc9z+3r2/63ipJ92Fqvgt6ZRkCY7Q4cxQ48iJrlTnwkCNy+72O4sxgKeGP8/yM6AqafHOtU+sACg+KmgyN4oxxbbgc/pjuWjr6DVRsMRYhVYDAsMBfGbkVE1w6dbS22C1NXF1e/mdq8ProILe/2r95fGhT8FYJscw0gWKD010vKdJdZyNnl5RsrrIUYTNaop3+snh44xmoFhYYJyrn8C97eaiD2YG1rATs3xVDYOH07k0ryTYMaaZqoO5dGKoIewu3Vh668bSrUgbli8EXm3/H8wBzo8YtUyr2uPwmI3YJOpC9VjTkzyVN0bbulOdHCrFCUBQfGDDuebx5eMA2Gx96d6ZvtmTiiZjOwq6QkgJi0FZhopQlA92wMzZaGNTtHFV+JYipxfCCGlfj9wvJEUT6jKOeAEZFEKOZqPx3MiSEprhc/zVR/oP8X7I/QpRngewf+Y/SLT2ZuershuuDa+/reIu7kXgEKPwYUUoM6igqmM5FrvoIMfG+nrHK2ixiiUmitOLZq4oWbsosBTnAAOKIIEIPgw1DBy5lrgCNCynhcWL2TRdH5jhb50OMuOUhQMyBTk8ykRPsvO1jpf/bNpO8HdXPjCQ6vtiqIFl6JAa94TDxIUAer8YPJbIxk1MlgckH0BYLQ9M+3PZaiCJHB3q27+n8zXwnHsZYcjiDUPucN8f5sykl7B14fqm6BmWkSOZMCGDuxA9y/MdgxhUOUNGRo/2Hfqw5z0RfXjGYyFXiGU42yQsyRD/iNYEl7ENmj+Q5G7JGWUEVWwsO2c9Ae87kjcO9e5vGDgMJ3ZU3LWiZJWVfEKlJJPimeGTOJuhWxvEgw5aCu5akOG3ADxFyWV2njyg1EmDbU/H7rrw2jJPBc6pRBYvbjmThqQhZOmWecqhjbO8NX6NMHhXAaVGvlBhar1y/b/D7vCh3gNs1pbMJW+tuH1+YPGpwc95iIzXJ6KbzqU6kzdm+auwH+J9HrZHcoBGkrwF4xJXqUJmDOckAq7SZd3r9KEbW00ym7SUsc2gizebvC42IlSGMoO4loPh458o8UbMttODtCdylWiWE6zkUMzKeyqiA+l+BABJXNo7szfIRSO3xLgwLOR53mU2pkh5nB7j+SaNSx6pIjfry7euK9vSNHyqcehkZ7JdLldOu93loPdIGHQjQ1AwnDdyY9QIn8Dg2aby7VA5O3waKpRc86LGCaKq8fLchjfRbpHhJJLPYGCP1KSY31wzK3iKl97BzCBEFwRrvjvj4em+WWisKq6+b+pD3cnOM0Mn2hLXkPhYNoo9N+LBOJC+IE+EX1+26S9m/jV2eqy0s0OyTSsBswPQDblNB1L9GFh5dSfnDHr5Oi0WJHZQjgkSEpmlj9/KH6/62+UR4wdaiQq00jvl9sn3WlUwmKzYHHEvAIKFI4wYxg30oZmPbK7YgVW4p333B517wEBRlRFAjPZk71TwEMC1BYx4JRQVeR5gYYLA+PHcpcnLVZstbCZgUckSAQXFDvtux5vlRZNWRFbP9M+x2i1mZXjNoe79jGdOURkS3YaD4qn5z80pru5Ndf/6ygvX4viBi+eTMWKGb6ihfXbxXHHgSuwiPf5LK1OxhTWg/p8IHjaOg7R5GmA7t9wCM5pLvNv++qGu/VlbFv3gSz3ltaHlU30zMBTlRRVTfNMhdkv55o+698tqkzXMmxIhPV79DLxP5ZLvtb+B69ak0o2YRVdizR2jNyh9NBGs0dA2lG8lHZsNe5SMEozSFUI8xaqjUWYJYsxpIxLScX743NXYparAPOgf6T349vX/w0SHhmxz+NEFB9yRnoOMQY3PL38RI4PM3VK2qaHvEwjKnoEubClwfUGQnhBw3dhZtUu0QD/q+uDV1pfIN5Im7zCvp/lmbKi4FXxWy5zobzCnDStxAPCctlHpQIW2RenNJ8KW1pP/0vTc7MDcvlTPSCaqBMmmzPSas8D2ettvH5/3DGC+M/Ph88NnsQnCdVQRP3RbYlffb38bZ0JOy+ZsORzDOS2Xs2X7kr3GAmUxyLsdrp1VT+AZDfyHne8NpvrNrNOZwpDkun1nw5/IeCBiWcZQUNYzacG+MWLMSJAQU4qISI/+7OKfLA4tRW/H6PWfnvsHHF7gJ8JXQPIyiHnXwr+rK61HLzaD5xqfTOYShteqAh64sVjpIoHTAFOPKdkif4kSg2+mYDBEQsGQllB8MQj3E9pLl18cTNNPt1gYP6r55yneaQxBSGLdqrImCKMpPmyq3Cbe473Tixd+ivd2JMQGVQpbzqU7F/DOWRgXW2IdIRwFTzDUxxuBAnWs+3NDZ+orNuIqXuIObazcNpodbYtfxWxBPvgDeSOYAk2zsjBUWxumi/Rbbb873ntUAufswZP8B547l31/gan1R3zDqEwWccOiULX8YWvR9FDTYGNtZDk2TafdtTSyclPldofdHk0PxzJ4X0brx3CEdHWESld3AdFtC0pqaiJ0L/ys93Br7Oo3eObCY1syO0oS6sRXNWBMukQGA81DVjDrea9nz1mTudb41X88/fT35+1aW7ERrWFP6UOzH8WnL9nTFr8WzQxFM1F6aHSXzCieM80/o2u0/Wj3R8d6Ph5KD8rahVY2l8X0msg3r6PI/uznP+hOdkCU5oa5jaoKhY7mZUQYdIxuQTsP2IJQ7f2z/rQmbNy0If8NBSuraZCuFctK6Zfp/zz/8+O9+DU/v5HQuJkJneKf7qr0TekcpZ+o4AhWI7mDYPjKQaGD5wikg/Zy8wFIGFDIFLQb1xVqhyXk5fxQEz5VweqVZfVLS+vmBKtlYyUBs2BeBdz05gu5F9elB4sYXkl2yXWCxFtk2pHBV3gnuyDd2PcFKqqjmIvyJyjG1OQKT17i4BkcJ0q6LG6eCZYuxW4m5cpw89XopdevvozLeam3HIu7xBPCuwK4jikwko4isE2Td6yr3CKRABYvKltGLrMN5YCjOYwUk93lpavs/cnepz57hBPJqaaRKCjwBgkz/FbGUoaREwH5vC55bE7FCWUUzLwmmcWF3ImBuqVyc8BVcuDG3hO9DdTKgJJ1Cx9j9cK6/6Uh/vWFX3zcsZ8SShklGLWoymq7BYRG1VEVZ6J2FUfFnwhTlbfwt0694weLnqaD+sE5D+OHHZkUoGM+vBLMkwYjh8ODDxSWx0QneR5Q44SxqizAvfALZk1qJMlMFdTgg4FJMvSozcIGAGpkkykYEtV0n8P7naqHoUgBRIrKdtX8PaGwIGGQAlFipFlQucr+o1v5kDSpjCl0LBMOFcZh++KCUOli+g0yHKCZLEw/u21X7Y/gthEAvuoqbvnLeT/kGMgVgAsVty2KDuqy6uMySpAkTmhwQPSIUpFvVqcu/hsrI5JjxYFle2TeD+EwGBTjsUsqJ3sb/qMJFw9cm5QCc+MuDmXhkoNGtWBBqAtUkaCE5jEnWCiFa8MQ97n8f7Pkx6sm0YtXKQUBoAm31t2XfvNxO/1PAlOElzbMFBbVObVnIkfHdQiKE/hf2I53oHbHlml3PFT9qMwcy+LYAKQDe+uJnmOneo53J9oHUwMYE5hHF8ZT/LD0v5kpdFrRncDrMfLId6SotNI/ra6ifnXl+jIv/Xo9pvw/uuySIz0SA1MAAAAASUVORK5CYII='/>"
			)

			document.querySelector(".landing-title._aj-8").textContent = document.querySelector(
				".landing-title._aj-8").textContent.replace("WhatsApp", "WA")
			document.querySelector("._aj-c").textContent = document.querySelector("._aj-c")
				.textContent.replace("WhatsApp", "WA")

		}
		

	}, 300)



	var time2 = setInterval(() => {

		if (!document.getElementsByClassName('_aigv')[2]) {
			return
		}

		if (document.getElementsByClassName('app-wrapper-web')[0].getElementsByClassName('two')[0]
			.getElementsByClassName('_aigv')[2]) {
			clearInterval(time2)

			document.getElementsByClassName('app-wrapper-web')[0].getElementsByClassName('two')[0].style
				.minWidth = 'auto'

			document.getElementsByClassName('app-wrapper-web')[0].getElementsByClassName('two')[0]
				.getElementsByClassName('_aigv')[2].style.minWidth = '100%'

			document.querySelectorAll(".x10l6tqk.xh8yej3.x1g42fcv").forEach(item => {

				item.addEventListener('click', (e) => {

					document.querySelectorAll("._aigv._aigz")[1].setAttribute("style",
						'z-index: 120;position: absolute;width: 100%;')

					document.querySelectorAll("._ak1t._ak1m")[0]
						.addEventListener('click', (e) => {
							setTimeout(() => {
								document.querySelectorAll(
										"div.x1i64zmx.x1emribx")[1]
									.addEventListener('click', (e) => {
										document.querySelectorAll(
												"div._aigv._aigw._aigx")[0]
											.setAttribute("style",
												'display:none')
										var tmer = setInterval(() => {
											if (document
												.querySelectorAll(
													"div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.xdt5ytf.x1qjc9v5._ajwt"
													)[0]) {
												document
													.querySelectorAll(
														"div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.xdt5ytf.x1qjc9v5._ajwt"
														)[0]
													.setAttribute(
														"style",
														'min-width:auto;'
														)
												clearInterval(tmer)
											}
										}, 300)
									})

								document.querySelectorAll(
										"div.x1i64zmx.x1emribx")[0]
									.addEventListener('click', (
										e) => {
										document
											.querySelectorAll(
												"div._aigv._aigw._aigx"
											)[0]
											.setAttribute(
												"style",
												'display:none')

										var tmersc =
											setInterval(() => {
												if (document
													.querySelectorAll(
														"div.x1n2onr6.xyw6214.x78zum5.x1r8uery.x1iyjqo2.xdt5ytf.x1hc1fzr.x6ikm8r.x10wlt62"
														)[0]) {

													document
														.querySelectorAll(
															"div.x1c4vz4f"
															)[0]
														.setAttribute(
															"style",
															'min-width:auto;'
														)

													clearInterval
														(
															tmersc)
												}

											}, 300)
									})




							}, 300)

						})


					if (document.getElementById("backleftid")) {
						document.getElementById("backleftid").remove()
					}
					document.getElementById("main").querySelector(
							'header')
						.insertAdjacentHTML("afterbegin",
							"<div id='backleftid' style='width: 29px;height:30px;display: flex;align-items: center;'><img style='width:21px;' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAYKADAAQAAAABAAAAYAAAAACpM19OAAADyUlEQVR4Ae2cPYsTQRjHk+hBBPN2oIKBvBVikUJIIShIxFq0ucavoYUW4p2NhV/BL2BlIQiHCHIKKopWaheTSAIhRZIiJFGT+Iy547K5JDsz2ZdnzH9gye7O7M4zv9/O7t3luQ0EUEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABOYRKBaLx2l/aF6dafuCJgWcTqevBoPBRxTzBVqGtHwYj8e3K5XKF5PGMR2rMQKy2ex9gr1DwVtipn1/aN8NkvBiemCmrFsGwzXoTCazTbE9WBJfvdfrnWs0Gt0lbVhWsb+PSsAXYM+Gw+GLLAnbBMVagCT8f0MMhUI5m7GyrGYrQAW+IDscDr+zJGwTFEsBqvBpjF8jkchHm7GyrGb3ENaA36Pbz5VSqfSJJWGboMQvNGyKDvzRaHS9XC4bCV+AZzMDdOFXq9VXbK4gjUBYCFhX+CxmwDrD913AusP3VQDgTx4YvjwDAH8C35cZAPiH8D0XAPhW+J4KAPyj8D0TAPjz4XsiAPAXw3ddAOAvh++qAMC3h++aAMCXg++KAMCXh++4AMBXg++oAMBXh++YAMDXg++IAMpYe0zZaXcUQuiJrxFN/yZLYbxLm67011C68p/R2W8u7cFaCfhWHvoZxrlc7h7gz9DU2NSeAXT196i/sGSfuPIXgNJKzMrn82cU4A9wz19An3ZrCVh8OtSoEsAtSJWYw+21ZwClAz5UiOUEtX+eSqWuKRyzFk21Z4Cggx9DV79Gjq1yina7/TQWi52k/9u6JHmeDWq7FY1G33c6nR+Sx/zXzVYSIMgQyJfxeFzMpKLYliiQMAVpZQHiXDQTXkPCFFWFVUcEQIIC8ZmmjgmAhBmykpuOCoAESepTzRwXAAlTdCVWXREACRLk95u4JgAS5CS4KgAS7CW4LgASlkvwRAAkLJbgmQBImC/BUwGQcFSC5wIgwSrBFwGQcCjBNwGQMJHgqwBICAR8F7DuElgIWGcJbASsImFzc3O31WrVxTlMK6wECHg6X29SdvblZDL5pNlsipe5GlXYCRD0NCScHgwGu5Qg8NMo+hQsSwE6Eijx6x2J+2yaAO3MOC8GSu+C26Z+dmT6ogTgkkw7bm3YzoADUJK3o3q/37/b7XZ/Hxxnyid7AQKkkJBIJEa0WqTFkk65//LuW7Va7RvVGVeMECCokoQ9SoPco9TG87R5ipZftLylZYvenP6GPlG8IlAoFDaoL9bPL69YoB8QAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQkCDwF77bKDf6sSL5AAAAAElFTkSuQmCC' /></div>"
						)
					document.getElementById("backleftid").addEventListener(
						'click',
						(e) => {
							document.querySelectorAll("._aigv._aigz")[1]
								.setAttribute("style",
									'z-index: 120;position: absolute;width: 0%;'
								)
						})

					var foot = document.getElementsByTagName("footer")[0]

					foot.querySelector(
							'.x10l6tqk.x1ey2m1c.x17qophe.x9f619.xh8yej3')
						.addEventListener('click', (
							e) => {
							setTimeout(() => {
								document.querySelectorAll(
										'.bugiwsl0.fooq7fky')[3]
									.addEventListener('click', (
										e) => {

										document
											.querySelectorAll(
												'._2Ts6i._3RGKj._318SY'
											)[0]
											.setAttribute(
												"style",
												'flex:0;')
										if (document
											.querySelectorAll(
												'._2Ts6i._3RGKj._318SY'
											)[1]) {
											document
												.querySelectorAll(
													'._2Ts6i._3RGKj._318SY'
												)[1]
												.setAttribute(
													"style",
													'flex:0;')
										}
										if (document
											.querySelectorAll(
												'._2Ts6i._3RGKj._318SY'
											)[2]) {
											document
												.querySelectorAll(
													'._2Ts6i._3RGKj._318SY'
												)[2]
												.setAttribute(
													"style",
													'flex:0;')
										}
										if (document
											.querySelectorAll(
												'._2Ts6i._3RGKj._318SY'
											)[3]) {
											document
												.querySelectorAll(
													'._2Ts6i._3RGKj._318SY'
												)[3]
												.setAttribute(
													"style",
													'flex:0;')
										}

										var timm = setInterval(
											() => {

												if (document
													.querySelectorAll(
														'.HP5-u'
													)[0]
												) {


													document
														.querySelectorAll(
															'.HP5-u'
														)[
															0
														]
														.setAttribute(
															"style",
															'min-width:auto;'
														)

													if (document
														.querySelectorAll(
															'.HP5-u'
														)[
															1
														]
													) {
														document
															.querySelectorAll(
																'.HP5-u'
															)[
																1
															]
															.setAttribute(
																"style",
																'min-width:auto;'
															)
													}
													if (document
														.querySelectorAll(
															'.HP5-u'
														)[
															2
														]
													) {
														document
															.querySelectorAll(
																'.HP5-u'
															)[
																2
															]
															.setAttribute(
																"style",
																'min-width:auto;'
															)
													}
													if (document
														.querySelectorAll(
															'.HP5-u'
														)[
															3
														]
													) {
														document
															.querySelectorAll(
																'.HP5-u'
															)[
																3
															]
															.setAttribute(
																"style",
																'min-width:auto;'
															)
													}

													// document.querySelectorAll('.ej3x2ktq.p357zi0d.f8m0rgwh.sh5ccnuw.tkdu00h0.gfz4du6o.r7fjleex.jv8uhy2r')[0].setAttribute("style",'margin-top:auto;')
												}

												if (!
													document
													.querySelectorAll(
														'.bugiwsl0.fooq7fky'
													)[2]
												) {
													clearInterval
														(
															timm)
												}

											}, 300)

									})

								document.querySelectorAll(
										'.bugiwsl0.fooq7fky')[2]
									.addEventListener('click', (
										e) => {

										document
											.querySelectorAll(
												'._2Ts6i._3RGKj._318SY'
											)[0]
											.setAttribute(
												"style",
												'flex:0;')
										if (document
											.querySelectorAll(
												'._2Ts6i._3RGKj._318SY'
											)[1]) {
											document
												.querySelectorAll(
													'._2Ts6i._3RGKj._318SY'
												)[1]
												.setAttribute(
													"style",
													'flex:0;')
										}
										if (document
											.querySelectorAll(
												'._2Ts6i._3RGKj._318SY'
											)[2]) {
											document
												.querySelectorAll(
													'._2Ts6i._3RGKj._318SY'
												)[2]
												.setAttribute(
													"style",
													'flex:0;')
										}
										if (document
											.querySelectorAll(
												'._2Ts6i._3RGKj._318SY'
											)[3]) {
											document
												.querySelectorAll(
													'._2Ts6i._3RGKj._318SY'
												)[3]
												.setAttribute(
													"style",
													'flex:0;')
										}

										var timm = setInterval(
											() => {

												if (document
													.querySelectorAll(
														'.HP5-u'
													)[0]
												) {


													document
														.querySelectorAll(
															'.HP5-u'
														)[
															0
														]
														.setAttribute(
															"style",
															'min-width:auto;'
														)

													if (document
														.querySelectorAll(
															'.HP5-u'
														)[
															1
														]
													) {
														document
															.querySelectorAll(
																'.HP5-u'
															)[
																1
															]
															.setAttribute(
																"style",
																'min-width:auto;'
															)
													}
													if (document
														.querySelectorAll(
															'.HP5-u'
														)[
															2
														]
													) {
														document
															.querySelectorAll(
																'.HP5-u'
															)[
																2
															]
															.setAttribute(
																"style",
																'min-width:auto;'
															)
													}
													if (document
														.querySelectorAll(
															'.HP5-u'
														)[
															3
														]
													) {
														document
															.querySelectorAll(
																'.HP5-u'
															)[
																3
															]
															.setAttribute(
																"style",
																'min-width:auto;'
															)
													}

													// document.querySelectorAll('.ej3x2ktq.p357zi0d.f8m0rgwh.sh5ccnuw.tkdu00h0.gfz4du6o.r7fjleex.jv8uhy2r')[0].setAttribute("style",'margin-top:auto;')
												}

												if (!
													document
													.querySelectorAll(
														'.bugiwsl0.fooq7fky'
													)[2]
												) {
													clearInterval
														(
															timm)
												}

											}, 300)

									})


							}, 300)

						})

				})
			})




			document.querySelector('div[data-testid="menu-bar-menu"]').addEventListener('click',
				(
					e) => {
					setTimeout(() => {
						document.querySelectorAll('._2qR8G._1wMaz._18oo2')[3]
							.addEventListener('click', (e) => {
								setTimeout(() => {
									document.querySelector('._3J6wB')
										.setAttribute("style",
											"width:auto;")
									document.querySelector('._3ev9-')
										.setAttribute("style",
											"min-width:auto;")
									
									document.querySelector(
										'div[data-testid="popup-controls-ok"]'
									).addEventListener('click', (
										e) => {
									})
								}, 300)
							})
					}, 300)
				})



		}
	}, 200)

	//}



	var time1 = setInterval(() => {

		if (document.querySelector(".landing-main")) {

			clearInterval(time1)
			document.querySelector(".landing-wrapper").style.minWidth = "100%";
			document.querySelector("._ak5k").style.display = "none";
			document.querySelector(".landing-header").style.display = "none";

			document.querySelector(".landing-title").style.fontWeight = "bold";
			document.querySelector(".landing-title").style.fontSize = "14px";
			document.querySelector(".landing-title").style.marginBottom = "-10px";

			var domm = document.getElementsByClassName('_aj-c')[1];
			domm.querySelectorAll('strong')[0].style.fontWeight = "bold";
			domm.querySelectorAll('strong')[1].style.fontWeight = "bold";
			domm.querySelectorAll('strong')[0].style.color = "#06A884";
			domm.querySelectorAll('strong')[1].style.color = "#06A884";
			document.querySelector(".landing-window").style.height = '100vh';

			document.querySelector(".landing-window").insertAdjacentHTML("afterbegin",
				"<div style='text-align: center;margin-top:12px;position: relative;'><div id='imagesdfgg' style='display: flex;align-items: center;justify-content: center;height: 9vw;position: absolute;width: 100%;color: #BCBCBC;font-size: 14px;'>- 非官方应用 -</div></div>"
			);



		}





	}, 200)