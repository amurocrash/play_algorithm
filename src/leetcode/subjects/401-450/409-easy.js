// 注意是所有字符都可以用，奇数的减去一个变成偶数就能用了，并不是个数不符合就不能用，坑爹
var longestPalindrome = function(s) {
  const map = new Map()
  for(let i = 0; i < s.length; i++) {
    const c = s[i]
    const count = map.get(c)
    if (count === undefined) {
      map.set(c, 1)
    } else {
      map.set(c, count + 1)
    }
  }


  // 奇数每个只能用n - 1个，但正中间可以用一个奇数的，类似accca，c=3也是可以的，这时候要+1回去
  let sum = 0
  let hasOdd = false
  for(const entry of map) {
    const [_, count] = entry
    if (count % 2 === 0) {
      sum += count
    } else {
      hasOdd = true
      sum += (count - 1)
    }
  }

  return hasOdd ? sum + 1 : sum
}

const s = 'civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth'
console.log(longestPalindrome(s))